import { updateDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";

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