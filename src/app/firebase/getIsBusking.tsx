import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./config";

export default async function getIsBusking() {
    const q = query(collection(db, "busking_status"));

    const querySnapshot = await getDocs(q);
    
    let isBusking = true;
    querySnapshot.docs.map(e => isBusking = e.data().isBusking);
    return isBusking;
}