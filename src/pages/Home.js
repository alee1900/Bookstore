import React from "react";
import { firebaseAuth } from "../firebase";
import DisplayData from "../firestore/DisplayData";
import GetData from "../firestore/GetData";
import { Button } from "@mui/material";
import { NavBtnLink } from "../navbar/NavbarElements";

const Home = (props) => {
  const [books, setBooks] = GetData();

  return (
    <div
      style={{
        justifyContent: "Center",
        alignItems: "Right",
        paddingLeft: 40,
        paddingTop: 10,
      }}
    >
      <h1>Available Books</h1>
      <Button
        variant="contained"
        onClick={() => {
          firebaseAuth.signOut();
          props.history.push("/");
        }}
        style={{
          position: "absolute",
          top: 20,
          fontSize: 18,
          backgroundColor: "#000",
        }}
      >
        Sign out
      </Button>
      <NavBtnLink to="/addBook">Add book</NavBtnLink>
      <DisplayData books={books} setBooks={setBooks} />
    </div>
  );
};

export default Home;
