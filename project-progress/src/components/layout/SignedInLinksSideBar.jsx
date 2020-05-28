import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../../index.css";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const SignedInLinksSideBar = ({
  signOut,
  profile,
  admin,
  superAdmin,
  click
}) => {
  if (superAdmin) {
    return (
      <ul>
        <li className="yellow-text">Logged in as Coordinator</li>
        <li>
          <Link to="/allocations" onClick={click}>
            Allocations
          </Link>
        </li>
        <li>
          <Link to="/signin" onClick={signOut}>
            Log Out
          </Link>
        </li>
        <li onClick={click}>
          <NavLink to="/" className="btn btn-floating cyan darken-2">
            {profile.initials}
          </NavLink>
        </li>
      </ul>
    );
  } else if (admin) {
    return (
      <ul>
        <li className="yellow-text">Logged in as Supervisor</li>
        <li>
          <Link to="/signin" onClick={signOut}>
            Log Out
          </Link>
        </li>
        <li onClick={click}>
          <NavLink to="/" className="btn btn-floating cyan darken-2">
            {profile.initials}
          </NavLink>
        </li>
      </ul>
    );
  } else {
    return (
      <ul>
        <li className="yellow-text">Logged in as Student</li>
        <li>
          <Link to="/signin" onClick={signOut}>
            Log Out
          </Link>
        </li>
        <li onClick={click}>
          <NavLink to="/" className="btn btn-floating cyan darken-2">
            {profile.initials}
          </NavLink>
        </li>
      </ul>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinksSideBar);
