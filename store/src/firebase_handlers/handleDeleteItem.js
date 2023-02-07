import { db } from "../firebase";

export const handleDelete = (e, data) => {
  return db
    .collection("products") // note return of promise chain
    .doc(data.id)
    .delete()
    .then(
      () => {
        console.log("Document successfully deleted!");
      },
      (error) => {
        console.error("Error removing document: ", error);
      }
    );
};
