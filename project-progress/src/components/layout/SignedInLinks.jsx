import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../../index.css";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const SignedInLinks = ({ signOut, profile, admin, superAdmin }) => {
  if (superAdmin) {
    return (
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li className="yellow-text">Logged in as Coordinator</li>
        <li>
          <Link to="/allocations">Allocations</Link>
        </li>
        <li>
          <Link to="/signin" onClick={signOut}>
            Log Out
          </Link>
        </li>
        <li>
          <NavLink to="/" className="btn btn-floating cyan darken-2">
            {profile.initials}
          </NavLink>
        </li>
      </ul>
    );
  } else if (admin) {
    return (
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li className="yellow-text">Logged in as Supervisor</li>
        <li>
          <Link to="/signin" onClick={signOut}>
            Log Out
          </Link>
        </li>
        <li>
          <NavLink to="/" className="btn btn-floating cyan darken-2">
            {profile.initials}
          </NavLink>
        </li>
      </ul>
    );
  } else {
    return (
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li className="yellow-text">Logged in as Student</li>
        <li>
          <Link to="/signin" onClick={signOut}>
            Log Out
          </Link>
        </li>
        <li>
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

export default connect(null, mapDispatchToProps)(SignedInLinks);
