import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async (userID) => {
 try{
  const q = query(collection(db, "users", userID, "items"));
  const querySnapshot = await getDocs(q);

 const mappedItems = querySnapshot.docs.map((doc) => ({
   id: doc.id,
   ...doc.data(),
    }));
  return mappedItems;
} catch (error) {
  console.log(error);
}
};

export const addItem = async (userId,item) => {
 try{
  const userRef = collection(db, "users", userId, "items");
  const itemsCollection = await addDoc(userRef, item)
  console.log("Document written with ID: ", docRef.id);
  return itemsCollection.id;
} catch (error) {
  console.log(error);
}
};