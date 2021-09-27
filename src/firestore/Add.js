import React from "react";
import { firestore } from "../firebase";
import { Button, TextField } from "@mui/material";

const initialState = {
  title: "",
  author: "",
  cover: "",
  description: "",
};

const Add = () => {
  const [state, setState] = React.useState(initialState);
  const db = firestore;
  const changeField = (field) => (event) => {
    setState({
      ...state,
      [field]: event.target.value,
    });
  };

  const addTitle = () => {
    db.collection("books")
      .add(state)
      .then(function () {
        // setBook([{ book: state }, ...book]);
        setState(initialState);
      })
      .catch(function (error) {
        console.error("Error writing book: ", error);
      });
  };

  return (
    <div
      style={{
        flexDirection: "column",
        display: "flex",
        textAlign: "center",
      }}
    >
      <h1 style={{ margin: 60 }}>Add a book</h1>
      <TextField
        id="outlined-basic"
        label="Title"
        variant="outlined"
        onChange={changeField("title")}
        value={state.title}
        type="text"
        style={{
          marginRight: "auto",
          marginLeft: "auto",
          marginTop: 10,
          marginBottom: 10,
          width: "50%",
        }}
      />
      <TextField
        id="outlined-basic"
        label="Author"
        variant="outlined"
        onChange={changeField("author")}
        value={state.author}
        type="text"
        style={{
          marginRight: "auto",
          marginLeft: "auto",
          marginTop: 10,
          marginBottom: 10,
          width: "50%",
        }}
      />
      <TextField
        id="outlined-basic"
        label="Cover URL"
        variant="outlined"
        onChange={changeField("cover")}
        value={state.cover}
        type="text"
        style={{
          marginRight: "auto",
          marginLeft: "auto",
          marginTop: 10,
          marginBottom: 10,
          width: "50%",
        }}
      />
      <TextField
        id="outlined-multiline-static"
        label="Description"
        multiline
        rows={3}
        value={state.description}
        onChange={changeField("description")}
        style={{
          marginRight: "auto",
          marginLeft: "auto",
          marginTop: 10,
          marginBottom: 10,
          width: "50%",
        }}
      />
      <Button
        variant="outlined"
        onClick={addTitle}
        style={{
          marginRight: "auto",
          marginLeft: "auto",
          marginTop: 10,
          marginBottom: 10,
          fontSize: 22,
          width: "30%",
        }}
      >
        Add Book
      </Button>
    </div>
  );
};

export default Add;
