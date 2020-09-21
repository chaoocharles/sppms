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
  click,
}) => {
  if (superAdmin) {
    return (
      <>
        <li>
          <span className="coordinator-level">Coordinator</span>
        </li>
        <li>
          <Link to="/allocations" onClick={click}>
            Allocations
          </Link>
        </li>
        <li>
          <Link
            to="/signin"
            onClick={() => {
              signOut();
              click();
            }}
          >
            Log Out
          </Link>
        </li>
        <li onClick={click}>
          <NavLink to="/" className="btn btn-floating cyan darken-2">
            {profile.initials}
          </NavLink>
        </li>
      </>
    );
  } else if (admin) {
    return (
      <ul>
        <li>
          <span className="supervisor-level">Supervisor</span>
        </li>
        <li>
          <Link
            to="/signin"
            onClick={() => {
              signOut();
              click();
            }}
          >
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
        <li>
          <span className="student-level">Student</span>
        </li>
        <li>
          <Link
            to="/signin"
            onClick={() => {
              signOut();
              click();
            }}
          >
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

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinksSideBar);
