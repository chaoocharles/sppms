import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import moment from "moment";
import "../../index.css";
import CreateMilestone from "../milestones/CreateMilestone";
import MilestoneList from "../milestones/MilestoneList";
import Remove from "../common/Remove";
import Approve from "../common/Approve";
import Status from "../common/Status";
import { toggleProjectStatus } from "../../store/actions/projectActions";
import { toggleProjectAStatus } from "../../store/actions/projectActions";
import { deleteProject } from "../../store/actions/projectActions";
import ProjectAStatus from "../common/ProjectAStatus";

class ProjectDetails extends Component {
  handleApprove = (project, projectId) => {
    if (project.status === true) {
      if (window.confirm("Mark this project as InProgress?"))
        this.props.toggleProjectStatus(project, projectId);
    } else {
      if (window.confirm("Approve this project?"))
        this.props.toggleProjectStatus(project, projectId);
    }
  };

  handleProjectAStatus = (project, projectId) => {
    if (project.projectA === true) {
      if (window.confirm("Mark Project A as InProgress?"))
        this.props.toggleProjectAStatus(project, projectId);
    } else {
      if (window.confirm("Approve Project A?"))
        this.props.toggleProjectAStatus(project, projectId);
    }
  };

  handleDelete = (projectId) => {
    alert("Remove all the milestones before removing this project.");
    if (
      window.confirm("Remove this project? \n\nThis action is irreversible!")
    ) {
      this.props.deleteProject(projectId);
      this.props.history.push("/");
    }
  };

  render() {
    const { projectId, project, auth, milestones, users } = this.props;

    const user = users?.find((u) => u.id === auth?.uid);

    let admin = false;
    let superAdmin = false;

    if (user) {
      admin = user.admin;
      superAdmin = user.superAdmin;
    }

    if (superAdmin) {
      if (!auth.uid) return <Redirect to="/signin" />;

      if (project) {
        return (
          <div className="container section">
            <div className="card z-depth-o custom-content-top-margin">
              <div className="card-content">
                <span className="card-title">{project.projectTitle}</span>
                <div className="flex-container">
                  <div>
                    <Link to="/">
                      <i className="small material-icons custom-link">
                        arrow_back
                      </i>
                    </Link>
                  </div>
                  <div>
                    <Status status={project.status} />
                  </div>
                  <div>
                    <Approve
                      onClick={() => this.handleApprove(project, projectId)}
                      status={project.status}
                    />
                  </div>
                  <div>
                    <Remove onClick={() => this.handleDelete(projectId)} />
                  </div>
                </div>
                <p className="projectA">
                  <span>Project A:</span>
                  <ProjectAStatus
                    onClick={() =>
                      this.handleProjectAStatus(project, projectId)
                    }
                    projectA={project.projectA}
                  />
                </p>
                <p>{project.projectDesc}</p>
              </div>
              <div className="card-action gret lighten-4 grey-text custom-font-caps">
                <div>
                  {project.authorFirstName} {project.authorLastName}{" "}
                  {project.regNumber} {project.course}
                </div>
                <div>
                  project added on:{" "}
                  {moment(project.createdAt.toDate()).calendar()}
                </div>
              </div>
              <MilestoneList milestones={milestones} projectId={projectId} />
            </div>
          </div>
        );
      } else {
        return (
          <div className="container center cyan-text">
            <p>Loading...</p>
          </div>
        );
      }
    } else if (admin) {
      if (!auth.uid) return <Redirect to="/signin" />;

      if (project) {
        return (
          <div className="container section">
            <div className="card z-depth-o custom-content-top-margin">
              <div className="card-content">
                <span className="card-title">{project.projectTitle}</span>
                <div className="flex-container">
                  <div>
                    <Link to="/">
                      <i className="small material-icons custom-link">
                        arrow_back
                      </i>
                    </Link>
                  </div>
                  <div>
                    <Status status={project.status} />
                  </div>
                  <div>
                    <Approve
                      onClick={() => this.handleApprove(project, projectId)}
                      status={project.status}
                    />
                  </div>
                  <div>
                    <Remove onClick={() => this.handleDelete(projectId)} />
                  </div>
                </div>
                <p className="projectA">
                  <span>Project A:</span>
                  <ProjectAStatus
                    onClick={() =>
                      this.handleProjectAStatus(project, projectId)
                    }
                    projectA={project.projectA}
                  />
                </p>
                <p>{project.projectDesc}</p>
              </div>
              <div className="card-action gret lighten-4 grey-text custom-font-caps">
                <div>
                  {project.authorFirstName} {project.authorLastName}{" "}
                  {project.regNumber} {project.course}
                </div>
                <div>
                  project added on:{" "}
                  {moment(project.createdAt.toDate()).calendar()}
                </div>
              </div>
              <MilestoneList milestones={milestones} projectId={projectId} />
            </div>
          </div>
        );
      } else {
        return (
          <div className="container center cyan-text">
            <p>Loading...</p>
          </div>
        );
      }
    } else if (project && auth.uid === project.authorId) {
      return (
        <div className="container section">
          <div className="card z-depth-o custom-content-top-margin">
            <div className="card-content">
              <span className="card-title">{project.projectTitle}</span>
              <div className="flex-container">
                <div>
                  <Link to="/">
                    <i className="small material-icons custom-link">
                      arrow_back
                    </i>
                  </Link>
                </div>
                <div>
                  <Status status={project.status} />
                </div>
              </div>
              <p className="projectA">
                <span>Project A:</span>
                <ProjectAStatus projectA={project.projectA} />
              </p>
              <p>{project.projectDesc}</p>
            </div>
            <div className="card-action gret lighten-4 grey-text custom-font-caps">
              <div>
                {project.authorFirstName} {project.authorLastName}{" "}
                {project.regNumber} {project.course}
              </div>
              <div>
                project added on:{" "}
                {moment(project.createdAt.toDate()).calendar()}
              </div>
            </div>
            <CreateMilestone projectId={projectId} />
            <MilestoneList milestones={milestones} projectId={projectId} />
          </div>
        </div>
      );
    } else {
      return (
        <div className="container center cyan-text">
          <p>Loading...</p>
        </div>
      );
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProject: (project, projectId) =>
      dispatch(deleteProject(project, projectId)),
    toggleProjectStatus: (project, projectId) =>
      dispatch(toggleProjectStatus(project, projectId)),
    toggleProjectAStatus: (project, projectId) =>
      dispatch(toggleProjectAStatus(project, projectId)),
  };
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const milestones = state.firestore.ordered.milestones;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    projectId: id,
    project: project,
    auth: state.firebase.auth,
    milestones: milestones,
    users: state.firestore.ordered.users,
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(() => [
    { collection: "projects" },
    { collection: "milestones", orderBy: ["createdAt", "desc"] },
    {
      collection: "users",
    },
  ])
)(ProjectDetails);
