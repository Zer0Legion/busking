"use client";

import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "./config"
import checkUniqueTitle from "./checkUniqueTitle";
import getIsBusking from "./getIsBusking";

export default async function addSongRequest(name: string, artist: string, remarks: string): Promise<any> {
    let isBusking = true;
    await getIsBusking().then(r => isBusking = r);

    checkUniqueTitle(name).then((r) => {
        if (isBusking &&( r && name != "")) {
            addDoc(collection(db, "requests"), {
                name: name,
                artist: artist,
                remarks: remarks
            });
        }
    })

}