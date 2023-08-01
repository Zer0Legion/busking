"use client";

import { addDoc, collection, doc, setDoc, FieldValue, serverTimestamp } from "firebase/firestore";
import { db } from "./config"
import checkUniqueTitle from "./checkUniqueSong";
import getIsBusking from "./getIsBusking";

export default async function addSongRequest(name: string, artist: string, remarks: string): Promise<any> {
    console.log("addSongRequest");
    let isBusking = true;
    await getIsBusking().then(r => isBusking = r);

    checkUniqueTitle(name, artist).then((r) => {
        if (isBusking &&( r && name != "")) {
            addDoc(collection(db, "requests"), {
                name: name,
                artist: artist,
                remarks: remarks,
                created: serverTimestamp()
            });
        }
    })

}