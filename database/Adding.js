import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { addMonths } from 'date-fns';

let actualuserID = '';

export const currentUserID = (id) => {
  actualuserID = id;
  return actualuserID;
}

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

const monthlyMembership = () => {
  const currentDate = new Date(); 
  const newDate = addMonths(currentDate, 1);
  return newDate;
}

export const AddMembership = async (pack) => {
  try {
      await addDoc(collection(db, "Membership"), {
          userid: actualuserID,
          membershipPackage: pack,
          date: monthlyMembership(),
      });
      
    } catch (e) {
      console.error("Error adding document: ", e);
    }
}


