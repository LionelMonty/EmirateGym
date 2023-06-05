import { doc, deleteDoc } from "firebase/firestore"; 
import { db } from "../config/firebase";

export const deleteUserDocument = async (documentId) => {
    try {
        const docRef = doc(db, "User", documentId);
        await deleteDoc(docRef);
        console.log('Document deleted!');
    } 
    catch (e) {
        alert('Error deleting document: ', e);
    }
};
