import { collection, getDocs, getDoc, doc, updateDoc,arrayRemove,arrayUnion  } from "firebase/firestore"; 
import { db } from "../config/firebase";
import { counter2 } from "../components/Reservation/CircularReservation";

let currentUser = '';

export const currentUserIDNotification = (id) => {
  currentUser = id;
  return currentUser;
}

export const getReservedBooking = async (nameOfDay, tempTitle, selectedTime, callback) => {
    try {
        var count = 0; 
        const q = collection(db, "Booking");
        
        const querySnapshot = await getDocs(q);
        console.log("===================first===================")
        console.log(nameOfDay, tempTitle, selectedTime);
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        for (let i = 0; i < doc.get("bookingDetail.date").length; i++) {
          console.log(doc.id, " => ", doc.get("bookingDetail.date")[i], doc.get("bookingDetail.exerciseOption")[i], doc.get("bookingDetail.hour")[i]);
          if(nameOfDay==doc.get("bookingDetail.date")[i] && tempTitle==doc.get("bookingDetail.exerciseOption")[i] && selectedTime==doc.get("bookingDetail.hour")[i]){
            count = count + 1;
          }
        }
        
        });
        console.log(count);
        callback(count);
        counter2(count);
        console.log("===========================================")
    } 
    catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  export const getNotification = async (callback) => {
    try {
        const q = collection(db, "Notification");
        
        const querySnapshot = await getDocs(q);

        let notifications = [];
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
          if (doc.id === currentUser) { // only display notification if doc.id matches currentUser
            for (let i = 0; i < doc.get("messageNotification.text").length; i++) {
              const notification = {
                title: doc.get("messageNotification.title")[i],
                text: doc.get("messageNotification.text")[i],
              };
              notifications.push(notification);
            }
          }
        });
        notifications.reverse();
        callback(notifications);
        
    } 
    catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  export const checkBookingExist = async (info) => {
    try {
      const docRef = doc(db, "Booking", currentUser);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        checkTodayBooking(info[0], info[1], info[2], docSnap, docRef);
      } else {
        console.log('You have not booked today at this slot')
      }
    } catch (e) {
      alert("Error getting document: ", e);
    }
  };

  export const checkTodayBooking = async (selectedTime, nameOfDay, tempTitle, docSnap, docRef) => {
    if(docSnap){
      const bookingDetail = docSnap.data().bookingDetail;

      const tempdate = bookingDetail.date;
      const temptempTitle = bookingDetail.exerciseOption;
      const tempselectedTime = bookingDetail.hour;
      
      for (let i = 0; i < tempdate.length; i++) {
        if (tempdate[i] == nameOfDay && temptempTitle[i] == tempTitle && tempselectedTime[i] == selectedTime) {

          let index1 = tempdate.indexOf(nameOfDay);
          let index2 = temptempTitle.indexOf(tempTitle);
          let index3 = tempselectedTime.indexOf(selectedTime);

          tempdate.splice(index1, 1);
          temptempTitle.splice(index2, 1);
          tempselectedTime.splice(index3, 1);
          await updateDoc(docRef, { bookingDetail: { date: arrayRemove(nameOfDay), exerciseOption: arrayRemove(tempTitle), hour: arrayRemove(selectedTime) } });
          
          for (let i = 0; i < tempdate.length; i++) {
            await updateDoc(docRef, { bookingDetail: { date: arrayUnion(tempdate[i]), exerciseOption: arrayUnion(temptempTitle[i]), hour: arrayUnion(tempselectedTime[i]) } });
          };
        
          alert("Your booking has been canceled. Unfortunately, we are unable to provide a refund.");
        } 
        else {
          // do something else if they don't match
          console.log('You have not booked today at this slot')
        }
      }
    }
    else{
      console.log("Document does not exist or query failed");
    }
  };


