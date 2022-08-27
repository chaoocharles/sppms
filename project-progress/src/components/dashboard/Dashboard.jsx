import React, { Component } from "react";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import AddAdminRole from "../admin/AddAdminRole";
import AddSuperAdminRole from "../admin/AddSuperAdminRole";
import { CreateProjectButton } from "../projects/CreateProjectButton";
import ShowAllocation from "../allocations/dashboardAllocations/ShowAllocation";
import ProjectsDocument from "../pdf/ProjectsDocument";
import ProjectADocument from "../pdf/ProjectADocument";
import { PDFDownloadLink } from "@react-pdf/renderer";
import styles from "../pdf/pdfStyles";

class Dashboard extends Component {
  _isOpen = false;

  componentDidMount() {
    this._isOpen = true;
  }

  componentWillUnmount() {
    this._isOpen = false;
  }

  render() {
    const { allocations, projects, auth, users } = this.props;

    if (!auth.uid) return <Redirect to="/signin" />;

    const user = users?.find((u) => u.id === auth.uid);

    let admin = false;
    let superAdmin = false;

    if (user) {
      admin = user.admin;
      superAdmin = user.superAdmin;
    }

    if (superAdmin) {
      return (
        <div className="container dashboard custom-content-top-margin">
          <div className="row">
            <div className="col s12 m7">
              <ProjectList
                projects={projects}
                allocations={allocations}
                auth={auth}
              />
            </div>
            <div className="col s12 m4 offset-m1">
              {this._isOpen && (
                <PDFDownloadLink
                  document={<ProjectsDocument projects={projects} />}
                  fileName="projects.pdf"
                  style={styles.downloadBtn}
                >
                  {({ blob, url, loading, error }) =>
                    loading ? "Loading document..." : "Download Projects' PDF"
                  }
                </PDFDownloadLink>
              )}
              {this._isOpen && (
                <PDFDownloadLink
                  document={<ProjectADocument projects={projects} />}
                  fileName="projectA.pdf"
                  style={styles.projectADownloadBtn}
                >
                  {({ blob, url, loading, error }) =>
                    loading ? "Loading document..." : "Download Project A PDF"
                  }
                </PDFDownloadLink>
              )}
              <AddAdminRole />
              <AddSuperAdminRole />
            </div>
          </div>
        </div>
      );
    } else if (admin) {
      return (
        <div className="container dashboard custom-content-top-margin">
          <div className="row">
            <div className="col s12 m7">
              <ProjectList
                projects={projects}
                allocations={allocations}
                auth={auth}
              />
            </div>
            <div className="col s12 m4 offset-m1">
              <ShowAllocation allocations={allocations} auth={auth} />
              <br />
              Do you need help? Email the system coordinator on
              coordinator@sppms.com
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container dashboard custom-content-top-margin">
          <div className="row">
            <div className="col s12 m7">
              <ProjectList projects={projects} />
            </div>
            <div className="col s12 m4 offset-m1">
              <CreateProjectButton />
              <ShowAllocation allocations={allocations} auth={auth} />
              <br />
              Do you need help? Email the system coordinator on
              coordinator@sppms.com <br />
              <br />
              Are you a supervisor but logged in with a student's level account?
              Send a supervision request to coordinator@sppms.com. In the
              request, attach your national ID and your staff ID. Note that the
              system admin may schedule a zoom meeting with you to confirm your
              identity.
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
    users: state.firestore.ordered.users,
    auth: state.firebase.auth,
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
    {
      collection: "users",
    },
  ])
)(Dashboard);
