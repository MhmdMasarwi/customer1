import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const getProduct = async (e, data) => {
  e.preventDefault();
  try {
    return getDocs(collection(db, "products")).then((querySnapshot) => {
      return querySnapshot.docs.find((doc) => doc.id === data.id);
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
