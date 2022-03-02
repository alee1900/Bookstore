import React from "react";
import { firebaseAuth } from "../firebase";
import DisplayData from "../firestore/DisplayData";
import GetData from "../firestore/GetData";
import { Button } from "@mui/material";
import { NavBtnLink } from "../navbar/NavbarElements";

const Home = (props) => {
  const [books, setBooks] = GetData();

  return (
    <div className="mainDiv">
      <h1>Available Books</h1>
      <Button
        variant="contained"
        onClick={() => {
          firebaseAuth.signOut();
          props.history.push("/");
        }}
        className="signoutButton"
      >
        Sign out
      </Button>
      <NavBtnLink to="/addBook">Add book</NavBtnLink>
      <DisplayData books={books} setBooks={setBooks} />
    </div>
  );
};

export default Home;
