import { updateDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { addMonths, addYears } from 'date-fns';

let actualuserIDUpdate = '';

export const currentUserIDUpdate = (id) => {
  actualuserIDUpdate = id;
  return actualuserIDUpdate;
}

export const updateNotification = async (title,text) => {
    try {
      // Get a reference to the collection and document
      const notificationRef = doc(db, "Notification", actualuserIDUpdate);
  
      // Read the existing messageNotification field
      const notificationSnap = await getDoc(notificationRef);
      const messageNotification = notificationSnap.data().messageNotification;
  
      // Add the new values to the text and title arrays
      messageNotification.text.push(text);
      messageNotification.title.push(title);
  
      // Update the messageNotification field with new text and title
      await updateDoc(notificationRef, {
        messageNotification: messageNotification,
      });
      } catch (e) {
        console.error("Error updating document: ", e);
    }
};

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

export const updateMembership = async (pack) => {
  try {
    // Get a reference to the collection and document
    const membershipRef = doc(db, "Membership", actualuserIDUpdate);

    // Read the existing messageNotification field
    const membershipSnap = await getDoc(membershipRef);
    const membershipPayment = membershipSnap.data().membershipPayment;

    // Add the new values to the text and title arrays
    membershipPayment.date.push(calculateMembership(pack));
    membershipPayment.membershipPackage.push(pack);

    // Update the messageNotification field with new text and title
    await updateDoc(membershipRef, {
      membershipPayment: membershipPayment,
    });
    } catch (e) {
      console.error("Error updating document: ", e);
  }
};

