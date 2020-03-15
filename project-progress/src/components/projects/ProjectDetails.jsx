import React from "react";
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
import { deleteProject } from "../../store/actions/projectActions";

const ProjectDetails = props => {
  const {
    projectId,
    project,
    auth,
    milestones,
    deleteProject,
    toggleProjectStatus
  } = props;

  const handleApprove = (project, projectId) => {
    if (project.status === true) {
      if (window.confirm("Mark this project as InProgress?"))
        toggleProjectStatus(project, projectId);
    } else {
      if (window.confirm("Approve this project?"))
        toggleProjectStatus(project, projectId);
    }
  };

  const handleDelete = (projectId, milestones) => {
    alert("Remove all the milestones before removing this project.");
    if (
      window.confirm("Remove this project? \n\nThis action is irreversible!")
    ) {
      deleteProject(projectId);
      props.history.push("/");
    }
  };

  if (!auth.uid) return <Redirect to="/signin" />;

  if (project && auth.uid === project.authorId) {
    return (
      <div className="container section">
        <div className="card z-depth-o grey lighten-3">
          <div className="card-content">
            <span className="card-title">{project.projectTitle}</span>
            <div className="flex-container">
              <div>
                <Link to="/">
                  <i className="small material-icons">arrow_back</i>
                </Link>
              </div>
              <div>
                <Status status={project.status} />
              </div>
              <div>
                <Approve
                  onClick={() => handleApprove(project, projectId)}
                  status={project.status}
                />
              </div>
              <div>
                <Remove onClick={() => handleDelete(projectId, milestones)} />
              </div>
            </div>
            <p>{project.projectDesc}</p>
          </div>
          <div className="card-action gret lighten-4 grey-text custom-font-caps">
            <div>
              {project.authorFirstName} {project.authorLastName}{" "}
              {project.regNumber} {project.course}
            </div>
            <div>
              Project Added On: {moment(project.createdAt.toDate()).calendar()}
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
};

const mapDispatchToProps = dispatch => {
  return {
    deleteProject: (project, projectId) =>
      dispatch(deleteProject(project, projectId)),
    toggleProjectStatus: (project, projectId) =>
      dispatch(toggleProjectStatus(project, projectId))
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
    milestones: milestones
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(() => [
    { collection: "projects" },
    { collection: "milestones", orderBy: ["createdAt", "desc"] }
  ])
)(ProjectDetails);
