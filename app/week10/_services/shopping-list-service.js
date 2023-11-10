import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async () => {
 try{
  const q = query(collection(db, "shopping-list"));
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

export const addItem = async (item) => {
 try{
  const docRef = await addDoc(collection(db, "shopping-list"), item);
  console.log("Document written with ID: ", docRef.id);
  return docRef.id;
} catch (error) {
  console.log(error);
}
};