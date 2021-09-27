import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { firebaseAuth } from "../firebase";
import { AuthContext } from "../Auth";
import { Button } from "@mui/material";

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
      style={{
        justifyContent: "Center",
        alignItems: "Right",
        paddingLeft: 40,
        paddingTop: 10,
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
          Log In
        </Button>
      </form>
    </div>
  );
};

export default withRouter(Login);
