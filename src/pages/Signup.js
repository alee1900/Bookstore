import React, { useContext, useCallback } from "react";
import { withRouter } from "react-router";
import { firebaseAuth } from "../firebase";
import { AuthContext } from "../Auth";
import { Redirect } from "react-router";
import { Button } from "@mui/material";

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
      style={{
        justifyContent: "Center",
        alignItems: "Right",
        paddingLeft: 40,
        paddingTop: 10,
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
            style={{
              marginRight: 15,
              fontSize: 20,
              background: "transparent",
              padding: 10,
              borderRadius: 5,
              margin: 10,
            }}
          />
        </label>
        <label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            style={{
              marginRight: 15,
              fontSize: 20,
              background: "transparent",
              padding: 10,
              borderRadius: 5,
              margin: 10,
            }}
          />
        </label>
        <Button
          variant="outlined"
          style={{
            marginLeft: 20,
            marginTop: 10,
            marginBottom: 10,
            fontSize: 18,
          }}
          type="submit"
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default withRouter(Signup);
