import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./config";

export default async function checkUniqueTitle(title: string) {
    const q = query(collection(db, "requests"), where("name", "==", title));

    const querySnapshot = await getDocs(q);
    return (querySnapshot.docs.length == 0); 
}