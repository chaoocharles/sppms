import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";
import logo from "../../logo-white.png";
import "../../index.css";
import firebase from "firebase/app";
import { addRoleStateToStore } from "../../store/actions/adminActions";
import SideBarToggle from "./SideBarToggle";

class Navbar extends Component {
  _isMounted = false;
  state = {
    admin: "",
    superAdmin: ""
  };

  componentDidMount() {
    this._isMounted = true;
    this.fireBaseListener = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        user.getIdTokenResult().then(idTokenResult => {
          if (this._isMounted) {
            this.setState({
              admin: idTokenResult.claims.admin,
              superAdmin: idTokenResult.claims.superAdmin
            });
            this.props.addRoleStateToStore(this.state);
          }
        });
      } else {
        if (this._isMounted) {
          this.setState({
            admin: "",
            superAdmin: ""
          });
        }
      }
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
    //    this.fireBaseListener && this.fireBaseListener();
    //    this.authListener = undefined;
  }

  render() {
    const {
      auth,
      profile,
      admin,
      superAdmin,
      handleSideBarToggle
    } = this.props;

    const links = auth.uid ? (
      <SignedInLinks profile={profile} admin={admin} superAdmin={superAdmin} />
    ) : (
      <SignOutLinks />
    );

    return (
      <nav className="nav-wrapper grey darken-2">
        <div className="container">
          <Link to="/">
            <img src={logo} alt="SPPMS" className="brand-logo logo" />
          </Link>
        </div>
        {links}
        <SideBarToggle click={handleSideBarToggle} />
      </nav>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    admin: state.admin.admin,
    superAdmin: state.admin.superAdmin
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addRoleStateToStore: role => dispatch(addRoleStateToStore(role))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
