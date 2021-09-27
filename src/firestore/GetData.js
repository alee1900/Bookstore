import React from "react";
import { firestore } from "../firebase";

const GetData = () => {
  const [books, setBooks] = React.useState([]);
  const db = firestore;
  React.useEffect(() => {
    db.collection("books")
      .get()
      .then((querySnapshot) => {
        let arr = [];
        querySnapshot.docs.map((book) => arr.push({ book: book.data() }));
        setBooks(arr);
      });
  }, [db]);
  return [books, setBooks];
};

export default GetData;
