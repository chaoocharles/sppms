import React from "react";
import { NavLink } from "react-router-dom";

const SignOutLinksSideBar = ({ click }) => {
  return (
    <ul>
      <li onClick={click}>
        <NavLink to="/signin">Sign In</NavLink>
      </li>
      <li onClick={click}>
        <NavLink to="/signup">Sign Up</NavLink>
      </li>
    </ul>
  );
};

export default SignOutLinksSideBar;
