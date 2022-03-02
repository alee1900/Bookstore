import { Button } from "@mui/material";
import { firebaseAuth } from "../firebase";
import Add from "../firestore/Add";
import React from "react";
import { NavBtnLink } from "../navbar/NavbarElements";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "../styles/addBook.css";

const AddBook = (props) => {
  //   const [book, setBook] = useState({});

  return (
    <div className="mainDiv">
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
      <NavBtnLink to="/" id="homeButton">
        <ArrowBackIosIcon id="arrowIcon" />
        Go Back
      </NavBtnLink>
      <Add />
    </div>
  );
};

export default AddBook;
