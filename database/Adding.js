import { setDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { addMonths, addYears } from 'date-fns';
import { updateNotification, updateMembership } from "./Update";

let actualuserID = '';

export const currentUserID = (id) => {
  actualuserID = id;
  return actualuserID;
}

export const AddUser = async (user_id, user_name) => {
  try {
      await setDoc(doc(db, "User", user_id), {
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
      await setDoc(doc(db, "Membership", actualuserID), {
          membershipPayment: {
            date: [calculateMembership(pack)],
            membershipPackage: [pack],
          }
      });
    } 
  catch (e) {
    console.error("Error adding document: ", e);
  }
}

export const checkMembership = async (pack) => {
  try {
    // Get a document reference
    const docRef = doc(db, "Membership", actualuserID);
    // Get the document
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      // Document exists
      updateMembership(pack);
    } else {
      // Document does not exist
      AddMembership(pack);
    }
  } catch (e) {
    console.error("Error getting document: ", e);
  }
};

export const setNotification = async (title,text) => {
  try {
    await setDoc(doc(db, "Notification", actualuserID), {
      messageNotification: {
        title: [title],
        text: [text],
      }
    });
    
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const checkNotification = async (title,text) => {
  try {
    // Get a document reference
    const docRef = doc(db, "Notification", actualuserID);
    // Get the document
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      // Document exists
      updateNotification(title,text);
    } else {
      // Document does not exist
      setNotification(title,text);
    }
  } catch (e) {
    console.error("Error getting document: ", e);
  }
};
