import { db } from "../firebase";

export const updateDoc = async (docId, data) => {
  const documentRef = db.collection("products").doc(docId);
  try {
    await documentRef.update(data);
    return true;
  } catch (error) {
    console.error("Error updating document: ", error);
    return false;
  }
};
