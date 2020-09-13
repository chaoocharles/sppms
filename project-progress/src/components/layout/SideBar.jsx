import React from "react";
import { connect } from "react-redux";
import SignedInLinksSideBar from "./SignedInLinksSideBar";
import SignOutLinksSideBar from "./SignedOutLinksSideBar";

const SideBar = ({ click, show, auth, profile, admin, superAdmin }) => {
  let sideBarClasses = "custom-sidebar";
  if (show) {
    sideBarClasses = "custom-sidebar open";
  }

  const links = auth.uid ? (
    <SignedInLinksSideBar
      profile={profile}
      admin={admin}
      superAdmin={superAdmin}
      click={click}
    />
  ) : (
    <SignOutLinksSideBar click={click} />
  );

  return (
    <nav className={sideBarClasses}>
      <ul>
        <li onClick={click}>
          <i
            className="material-icons white-text"
            style={{ cursor: "pointer", fontSize:"35px"}}
          >
            close
          </i>
        </li>
        {links}
      </ul>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    admin: state.admin.admin,
    superAdmin: state.admin.superAdmin
  };
};

export default connect(mapStateToProps)(SideBar);
