import React from "react";
import NavbarDrawer from "./NavbarDrawer";
import { Nav, NavBtn, NavBtnLink } from "./NavbarElements";

const Navbar = () => {
  return (
    <Nav>
      <NavbarDrawer />
      <NavBtn>
        <NavBtnLink to="/">Log In</NavBtnLink>
      </NavBtn>
      <NavBtn>
        <NavBtnLink to="/signup">Sign Up</NavBtnLink>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
