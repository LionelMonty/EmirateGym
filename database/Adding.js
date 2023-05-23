import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";

export const AddUser = async (user_id, user_name) => {

    try {
        await addDoc(collection(db, "User"), {
            userid: user_id,
            username: user_name,
        });
        
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

