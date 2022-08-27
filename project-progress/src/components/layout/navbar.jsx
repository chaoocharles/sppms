import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import logo from "../../images/logo.png";
import "../../index.css";
import SideBarToggle from "./SideBarToggle";

class Navbar extends Component {
  _isMounted = false;

  render() {
    const { auth, profile, users, handleSideBarToggle } = this.props;

    const user = users?.find((u) => u.id === auth?.uid);

    let admin = false;
    let superAdmin = false;

    if (user) {
      admin = user.admin;
      superAdmin = user.superAdmin;
    }

    const links = auth.uid ? (
      <SignedInLinks profile={profile} admin={admin} superAdmin={superAdmin} />
    ) : (
      <SignOutLinks />
    );

    return (
      <nav className="grey darken-3 custom-fixed">
        <div>
          <Link to="/">
            <div className="brand-logo">
              <img src={logo} alt="SPPMS" className="logo" />
            </div>
          </Link>
        </div>
        {links}
        <SideBarToggle click={handleSideBarToggle} />
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    users: state.firestore.ordered.users,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "users",
    },
  ])
)(Navbar);
