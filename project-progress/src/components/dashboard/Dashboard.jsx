import React, { Component } from "react";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import AddAdminRole from "../admin/AddAdminRole";
import AddSuperAdminRole from "../admin/AddSuperAdminRole";
import { CreateProjectButton } from "../projects/CreateProjectButton";
import ShowAllocation from "./ShowAllocation";
import ProjectsDocument from "../pdf/ProjectsDocument";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

class Dashboard extends Component {
  render() {
    const { allocations, projects, auth, admin, superAdmin } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    if (superAdmin) {
      return (
        <div className="dashboard custom-content-top-margin">
          <div className="row">
            <div className="col s12 m7">
              <button className="pdf-download-btn">
                <PDFDownloadLink
                  document={<ProjectsDocument projects={projects} />}
                  fileName="projects.pdf"
                >
                  {({ blob, url, loading, error }) =>
                    loading ? "Loading document..." : "Download Projects PDF"
                  }
                </PDFDownloadLink>
              </button>
                <PDFViewer>
                  <ProjectsDocument projects = {projects}/>
                </PDFViewer>
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
            <div className="col s12 m4 offset-m1">
              <ShowAllocation allocations={allocations} auth={auth} />
            </div>
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
              <ShowAllocation allocations={allocations} auth={auth} />
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
    allocations: state.firestore.ordered.allocations,
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
