import { collection, getDocs, query, where } from "firebase/firestore"; 
import { db } from "../config/firebase";
import { counter2 } from "../components/Reservation/CircularReservation";
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
