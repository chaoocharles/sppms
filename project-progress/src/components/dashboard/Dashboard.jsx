import React, { Component } from "react";
import ProjectList from "../projects/ProjectList";
import { CreateProjectButton } from "../layout/SignedInLinks";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import AddAdminRole from "../admin/AddAdminRole";
import firebase from "firebase/app";
import AddSuperAdminRole from "../admin/AddSuperAdminRole";

class Dashboard extends Component {
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
            console.log(this.state);
          }
        });
      } else {
        if (this._isMounted) {
          this.setState({
            admin: ""
          });
        }
      }
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
    // this.fireBaseListener && this.fireBaseListener();
    // this.authListener = undefined;
  }

  render() {
    const { projects, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="dashboard">
        <div className="row">
          <div className="col s12 m7">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m4 offset-m1">
            <CreateProjectButton />
            <AddAdminRole />
            <AddSuperAdminRole />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "projects",
      orderBy: ["createdAt", "desc"]
    }
  ])
)(Dashboard);
