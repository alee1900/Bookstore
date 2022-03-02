import React from "react";
import { firestore } from "../firebase";
import { Button, TextField } from "@mui/material";
import AddDialog from "../components/AddDialog";
import "../styles/add.css";

const initialState = {
  title: "",
  author: "",
  cover: "",
  description: "",
};

const Add = () => {
  const [state, setState] = React.useState(initialState);
  const [showErrorDialog, setShowErrorDialog] = React.useState(false);

  const db = firestore;
  const changeField = (field) => (event) => {
    setState({
      ...state,
      [field]: event.target.value,
    });
  };

  const addTitle = () => {
    if (state != initialState) {
      db.collection("books")
        .add(state)
        .then(function () {
          setState(initialState);
        })
        .catch(function (error) {
          console.error("Error writing book: ", error);
        });
    } else {
      setShowErrorDialog(true);
    }
  };

  return (
    <div id="add">
      <h1>Add a book</h1>
      <TextField
        id="outlined-basic"
        label="Title"
        variant="outlined"
        onChange={changeField("title")}
        value={state.title}
        type="text"
        className="inputField"
      />
      <TextField
        id="outlined-basic"
        label="Author"
        variant="outlined"
        onChange={changeField("author")}
        value={state.author}
        type="text"
        className="inputField"
      />
      <TextField
        id="outlined-basic"
        label="Cover URL"
        variant="outlined"
        onChange={changeField("cover")}
        value={state.cover}
        type="text"
        className="inputField"
      />
      <TextField
        id="outlined-multiline-static"
        label="Description"
        multiline
        rows={3}
        value={state.description}
        onChange={changeField("description")}
        className="inputField"
      />
      <Button variant="outlined" onClick={addTitle} id="addButton">
        Add Book
      </Button>
      {showErrorDialog ? <AddDialog /> : null}
    </div>
  );
};

export default Add;
