import React from "react";
import "../styles/displayData.css";
import BookDetails from "../components/BookDetails";
import Delete from "./Delete";
import Update from "./Update";

const DisplayData = ({ books }) => {
  return (
    <div id="allBooks">
      {books.map((books) => (
        <div key={books.id} id="book">
          <img
            src={books.book.cover}
            alt={books.book.title}
            title={books.book.title}
          />
          <div id="text">
            <p id="bookTitle">{books.book.title}</p>
            <p id="bookAuthor">{books.book.author}</p>
          </div>
          <BookDetails books={books} />
          <Update doc={books.id} />
          <Delete doc={books.id} />
        </div>
      ))}
    </div>
  );
};

export default DisplayData;
