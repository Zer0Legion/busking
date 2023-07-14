"use client";

import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "./config"
import checkUniqueTitle from "./checkUniqueTitle";

export default async function addSongRequest(name: string, artist: string, remarks: string): Promise<any> {
    checkUniqueTitle(name).then((r) => {
        if (r && name != "") {
            addDoc(collection(db, "requests"), {
                name: name,
                artist: artist,
                remarks: remarks
            });
        }
    })

}