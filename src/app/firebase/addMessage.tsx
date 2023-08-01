"use client";

import { addDoc, collection, doc, setDoc, FieldValue, serverTimestamp } from "firebase/firestore";
import { db } from "./config"

export default async function addMessage(from:string, message:string): Promise<any> {
    addDoc(collection(db, "messages"), {
        from: from,
        message: message
    });
    

}