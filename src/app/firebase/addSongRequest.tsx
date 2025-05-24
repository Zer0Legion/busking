"use client";

import { addDoc, collection, doc, setDoc, FieldValue, serverTimestamp, query, where, getDocs } from "firebase/firestore";
import { db } from "./config"
import checkUniqueTitle from "./checkUniqueSong";
import getIsBusking from "./getIsBusking";
import { count } from "console";

export default async function addSongRequest(name: string, artist: string, remarks: string): Promise<any> {
    console.log("addSongRequest");
    let isBusking = true;
    await getIsBusking().then(r => isBusking = r);

    checkUniqueTitle(name, artist).then((r) => {

        if (isBusking && (r && name != "")) {
            addDoc(collection(db, "requests"), {
                name: name,
                artist: artist,
                remarks: remarks,
                created: serverTimestamp()
            });
            recordSongRequest(name, artist);
        }
    })

}

async function recordSongRequest(name: string, artist: string) {
    const q = query(
        collection(db, "historical_requests"),
        where("name", "==", name),
        where("artist", "==", artist)
    );

    const querySnapshot = await getDocs(q);

    if (querySnapshot.docs.length > 1) {
        throw new Error("More than one document found for the given name and artist.");
    } else if (querySnapshot.docs.length == 0) {
        addDoc(collection(db, "historical_requests"), {
            name: name,
            artist: artist,
            created: serverTimestamp(),
            updated: serverTimestamp(),
            count: 1    
        });
    } else if (querySnapshot.docs.length == 1) {
        const docRef = doc(db, "historical_requests", querySnapshot.docs[0].id);
        let count = querySnapshot.docs[0].data().count;

        setDoc(
            docRef, {
                count: count + 1,
                updated: serverTimestamp()
            }, { merge: true }
        )
    }

}