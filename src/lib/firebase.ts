import { 
  addDoc, 
  collection, 
  doc, 
  setDoc, 
  serverTimestamp, 
  query, 
  where, 
  getDocs 
} from "firebase/firestore";
import { db } from "@/app/firebase/config";
import { SongRequest, Message, HistoricalRequest } from "@/types";

// Song Request Functions
export async function checkUniqueTitle(name: string, artist: string): Promise<boolean> {
  try {
    const q = query(
      collection(db, "requests"),
      where("name", "==", name),
      where("artist", "==", artist)
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.empty;
  } catch (error) {
    console.error("Error checking unique title:", error);
    throw error;
  }
}

export async function getIsBusking(): Promise<boolean> {
  try {
    const q = query(collection(db, "status"));
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      return doc.data().isBusking ?? true;
    }
    return true; // Default to true if no status document exists
  } catch (error) {
    console.error("Error getting busking status:", error);
    return true; // Default to true on error
  }
}

export async function addSongRequest(name: string, artist: string, remarks: string): Promise<void> {
  try {
    const isBusking = await getIsBusking();
    
    if (!isBusking) {
      throw new Error("Not currently busking");
    }

    const isUnique = await checkUniqueTitle(name, artist);
    
    if (!isUnique || !name.trim()) {
      throw new Error("Invalid or duplicate song request");
    }

    // Add to current requests
    await addDoc(collection(db, "requests"), {
      name: name,
      artist: artist,
      remarks: remarks,
      created: serverTimestamp()
    });

    // Record in historical requests
    await recordSongRequest(name, artist);
  } catch (error) {
    console.error("Error adding song request:", error);
    throw error;
  }
}

async function recordSongRequest(name: string, artist: string): Promise<void> {
  try {
    const q = query(
      collection(db, "historical_requests"),
      where("name", "==", name),
      where("artist", "==", artist)
    );

    const querySnapshot = await getDocs(q);

    if (querySnapshot.docs.length > 1) {
      throw new Error("More than one document found for the given name and artist.");
    } else if (querySnapshot.docs.length === 0) {
      // Create new historical request
      await addDoc(collection(db, "historical_requests"), {
        name: name,
        artist: artist,
        created: serverTimestamp(),
        updated: serverTimestamp(),
        count: 1
      });
    } else if (querySnapshot.docs.length === 1) {
      // Update existing historical request
      const docRef = doc(db, "historical_requests", querySnapshot.docs[0].id);
      const currentCount = querySnapshot.docs[0].data().count || 0;

      await setDoc(
        docRef,
        {
          count: currentCount + 1,
          updated: serverTimestamp()
        },
        { merge: true }
      );
    }
  } catch (error) {
    console.error("Error recording song request:", error);
    throw error;
  }
}

// Message Functions
export async function addMessage(from: string, message: string): Promise<void> {
  try {
    if (message.length < 4) {
      throw new Error("Message too short");
    }

    await addDoc(collection(db, "messages"), {
      from: from || "Anonymous",
      message: message,
      created: serverTimestamp()
    });
  } catch (error) {
    console.error("Error adding message:", error);
    throw error;
  }
}

// Utility function to get all requests (for admin purposes)
export async function getAllRequests(): Promise<SongRequest[]> {
  try {
    const q = query(collection(db, "requests"));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as SongRequest[];
  } catch (error) {
    console.error("Error getting requests:", error);
    throw error;
  }
}

// Utility function to get all messages (for admin purposes)
export async function getAllMessages(): Promise<Message[]> {
  try {
    const q = query(collection(db, "messages"));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Message[];
  } catch (error) {
    console.error("Error getting messages:", error);
    throw error;
  }
}
