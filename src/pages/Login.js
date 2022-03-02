import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { firebaseAuth } from "../firebase";
import { AuthContext } from "../Auth";
import { Button } from "@mui/material";
import "../styles/login.css";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await firebaseAuth.signInWithEmailAndPassword(
          email.value,
          password.value
        );
        history.push("/home");
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
      <h1>Log In</h1>
      <form onSubmit={handleLogin}>
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
          Log In
        </Button>
      </form>
    </div>
  );
};

export default withRouter(Login);
