import React from "react";
import { firestore } from "../firebase";
import { Button, TextField } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import "../styles/update.css";

const initialState = {
  title: "",
  author: "",
  cover: "",
  description: "",
};

const Update = ({ doc }) => {
  const [state, setState] = React.useState("");

  const db = firestore;
  const changeField = (field) => (event) => {
    setState({
      ...state,
      [field]: event.target.value,
    });
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const updateBook = () => {
    db.collection("books")
      .doc(doc)
      .update(state)
      .then(function () {
        setState(initialState);
      })
      .catch(function (error) {
        console.error("Error updating document: ", error);
      });
  };

  return (
    <div id="update">
      <Button variant="outlined" onClick={handleClickOpen}>
        Edit Book
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Edit book"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              onChange={changeField("title")}
              value={state.title}
              type="text"
              className="dialogInputField"
            />
            <TextField
              id="outlined-basic"
              label="Author"
              variant="outlined"
              onChange={changeField("author")}
              value={state.author}
              type="text"
              className="dialogInputField"
            />
            <TextField
              id="outlined-basic"
              label="Cover URL"
              variant="outlined"
              onChange={changeField("cover")}
              value={state.cover}
              type="text"
              className="dialogInputField"
            />
            <TextField
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={3}
              value={state.description}
              onChange={changeField("description")}
              className="dialogInputField"
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              handleClose();
              updateBook();
            }}
          >
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Update;
