import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./config";


export default async function checkUniqueSong(title: string, artist: string) {
    console.log("checkUniqueSong");
    const q = query(collection(db, "requests"), where("name", "==", title), where("artist", "==", artist));

    const querySnapshot = await getDocs(q);
    return (querySnapshot.docs.length == 0); 
}