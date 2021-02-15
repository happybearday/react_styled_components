import React from "react";
import { Nav, NavbarContainer, NavIcon, NavLogo } from "./Navbar.elements";

function Navbar() {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon />
            ULTRA
          </NavLogo>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
