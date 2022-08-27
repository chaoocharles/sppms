import React from "react";
import ProjectSummary from "./ProjectSummary";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const ProjectList = ({ projects, allocations, auth, users }) => {
  const user = users?.find((u) => u.id === auth?.uid);

  let admin = false;
  let superAdmin = false;

  if (user) {
    admin = user.admin;
    superAdmin = user.superAdmin;
  }

  let allocation =
    allocations &&
    allocations.find(
      (allocation) =>
        allocation.members &&
        allocation.members.some((member) => member.id === auth.uid)
    );

  let members = allocation?.members;

  let someProjects = projects?.filter((project) =>
    members?.some((member) => member.id === project.authorId)
  );

  if (superAdmin) {
    return (
      <div>
        {projects?.length > 0 ? (
          projects &&
          projects.map((project) => {
            return <ProjectSummary project={project} key={project.id} />;
          })
        ) : (
          <p>No projects yet...</p>
        )}
      </div>
    );
  } else if (admin) {
    return (
      <div>
        {someProjects?.length > 0 ? (
          someProjects &&
          someProjects.map((project) => {
            return <ProjectSummary project={project} key={project.id} />;
          })
        ) : (
          <p>No projects yet...</p>
        )}
      </div>
    );
  } else {
    return (
      <div>
        {projects?.length > 0 ? (
          projects &&
          projects.map((project) => {
            return <ProjectSummary project={project} key={project.id} />;
          })
        ) : (
          <p>No projects yet...</p>
        )}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
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
)(ProjectList);
