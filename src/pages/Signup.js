import React, { useContext, useCallback } from "react";
import { withRouter } from "react-router";
import { firebaseAuth } from "../firebase";
import { AuthContext } from "../Auth";
import { Redirect } from "react-router";
import { Button } from "@mui/material";
import "../styles/login.css";

const Signup = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await firebaseAuth.createUserWithEmailAndPassword(
          email.value,
          password.value
        );
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/home" />;
  }

  return (
    <div
      className="mainDiv"
      style={{
        textAlign: "center",
      }}
    >
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="loginInput"
          />
        </label>
        <label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="loginInput"
          />
        </label>
        <Button variant="outlined" type="submit" className="loginButton">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default withRouter(Signup);
