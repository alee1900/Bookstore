import { Button } from "@mui/material";
import { firebaseAuth } from "../firebase";
import Add from "../firestore/Add";
import React from "react";
import { NavBtnLink } from "../navbar/NavbarElements";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const AddBook = (props) => {
  //   const [book, setBook] = useState({});

  return (
    <div
      style={{
        justifyContent: "Center",
        alignItems: "Right",
        paddingLeft: 40,
        paddingTop: 10,
      }}
    >
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
      <NavBtnLink
        to="/"
        style={{ position: "absolute", top: 100, left: 16, marginBottom: 100 }}
      >
        <ArrowBackIosIcon style={{ fontSize: 13 }} />
        Go Back
      </NavBtnLink>
      <Add />
    </div>
  );
};

export default AddBook;
