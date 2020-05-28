import React, { Component } from "react";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import AddAdminRole from "../admin/AddAdminRole";
import AddSuperAdminRole from "../admin/AddSuperAdminRole";
import { CreateProjectButton } from "../projects/CreateProjectButton";

class Dashboard extends Component {
  render() {
    const { projects, auth, admin, superAdmin } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    if (superAdmin) {
      return (
        <div className="dashboard custom-content-top-margin">
          <div className="row">
            <div className="col s12 m7">
              <ProjectList projects={projects} />
            </div>
            <div className="col s12 m4 offset-m1">
              <AddAdminRole />
              <AddSuperAdminRole />
            </div>
          </div>
        </div>
      );
    } else if (admin) {
      return (
        <div className="dashboard custom-content-top-margin">
          <div className="row">
            <div className="col s12 m7">
              <ProjectList projects={projects} />
            </div>
            <div className="col s12 m4 offset-m1"></div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="dashboard custom-content-top-margin">
          <div className="row">
            <div className="col s12 m7">
              <ProjectList projects={projects} />
            </div>
            <div className="col s12 m4 offset-m1">
              <CreateProjectButton />
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    admin: state.admin.admin,
    superAdmin: state.admin.superAdmin,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "projects",
      orderBy: ["createdAt", "desc"],
    },
    {
      collection: "allocations",
      orderBy: ["createdAt", "desc"],
    },
  ])
)(Dashboard);
