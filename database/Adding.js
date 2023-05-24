import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { addMonths, addYears } from 'date-fns';

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

const calculateMembership = (monthOrYear) => {
  const currentDate = new Date(); 
  let newDate;
  if (monthOrYear == "Monthly") {
    newDate = addMonths(currentDate, 1);
  }
  else{
    newDate = addYears(currentDate, 1);
  }
  return newDate;
}

export const AddMembership = async (pack) => {
  try {
      await addDoc(collection(db, "Membership"), {
          userid: actualuserID,
          membershipPackage: pack,
          date: calculateMembership(pack),
      });
      
    } catch (e) {
      console.error("Error adding document: ", e);
    }
}


