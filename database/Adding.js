import { setDoc, doc, getDoc, collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { addMonths, addYears } from 'date-fns';
import { updateNotification, updateMembership, updateBooking } from "./Update";
import moment from "moment";
import Toast from 'react-native-toast-message';

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

export const checkNotification = async (title, text) => {
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

export const addBooking = async (selectedTime, nameOfDay, tempTitle) => {
  try {
      await setDoc(doc(db, "Booking", actualuserID), {
          bookingDetail: {
            date: [nameOfDay],
            exerciseOption: [tempTitle],
            hour: [selectedTime],
          }
      });
    } 
  catch (e) {
    console.error("Error adding document: ", e);
  }
}

export const checkBooking = async (book) => {
  var title = 'Booking Done!';
  var text = 'Your booking has been successfully.';
  try {
    // Get a document reference
    const docRef = doc(db, "Booking", actualuserID);

    // Get the document
    const docSnapshot = await getDoc(docRef);
    if (docSnapshot.exists()) {
      // Document exists
      updateBooking(book[0], book[1], book[2]);
      Toast.show({
        type: 'success',
        text1: 'Booking Done!',
        text2: 'Your booking has been successfully.',
      });
      checkNotification(title, text);
    } 
    else {
      // Document does not exist
      addBooking(book[0], book[1], book[2]);
      Toast.show({
        type: 'success',
        text1: 'Booking Done!',
        text2: 'Your booking has been successfully.',
      });
      checkNotification(title, text);
    }
  } 
  catch (e) {
    console.error("Error getting document: ", e);
  }
};

export const getMembership = async (book, navigate) => {
  
  try {
    const docSnap = await getDoc(doc(db, "Membership", actualuserID));
    // Check if the document exists
    if (docSnap.exists()) {
      // Get the membershipPayment field
      const membershipPayment = docSnap.data().membershipPayment;
      
      // Get the text array
      const date = membershipPayment.date;
      
      // Get the last item in the text array
      const lastItem = date[date.length - 1];
      
      // Do something with the last item
      var d1 = moment(lastItem.toDate(), "yyyy-MM-ddTHH:mm:ss:msZ");
      var d2 = moment().format("YYYY-MM-DD");

      if(d1.isSameOrAfter(d2)){
        checkBooking(book);
      }
      else{
        navigate();
      }


      console.log(d1.isSameOrAfter(d2)); 

    } else {
      // Handle the case where the document does not exist
      console.log("No such document!");
    }
  } 
  catch (e) {
    console.error("Error adding document: ", e);
  }
};



export const checkUserMembership = async (info, navigate) => {
  try {
    // Get a document reference
    const docRef = doc(db, "Membership", actualuserID);
    // Get the document
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      // Document exists
      getMembership(info, navigate);
    } else {
      // Document does not exist
      navigate();
    }
  } catch (e) {
    console.error("Error getting document: ", e);
  }
};


export const addPhotoToFirestore = async (userID,downloadURL,name) => {
  try {
    await addDoc(collection(db, "Feed"), {
      userID: userID,
      photoName: downloadURL,
      name: name,
      creation: moment().format('YYYY-MM-DD HH:mm:ss'),
    });
  } 
  catch (e) {
    console.error("Error adding document: ", e);
  }
};


export const addPhotoInformationToFirestore = async (documentRef,downloadURL) => {
  try {
      const docRef = doc(db, "User", documentRef);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        
        const name = docSnap.data().username;
        console.log(name)
        addPhotoToFirestore(documentRef,downloadURL,name);
      } 
      else {
        throw new Error("Document does not exist.");
      }
  } catch (e) {
    console.error("Error getting document: ", e);
    return null;
  }
}