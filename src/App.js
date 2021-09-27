import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";
import { AuthProvider } from "./Auth";
import AddBook from "./pages/AddBook";
// import PrivateRoute from "./PrivateRoute.js";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        {/* <Switch> */}
        {/* <PrivateRoute path="/" exact component={Home} /> */}
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={Home} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/addBook" exact component={AddBook} />
        {/* </Switch> */}
      </Router>
    </AuthProvider>
  );
};

export default App;
