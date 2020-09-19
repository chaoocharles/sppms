import React from "react";
import ProjectSummary from "./ProjectSummary";
import { connect } from "react-redux";

const ProjectList = ({ projects, allocations, auth, admin, superAdmin }) => {
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

  console.log(someProjects)

  if (admin) {
    return (
      <div>
        { someProjects?.length > 0 ? someProjects &&
          someProjects.map((project) => {
            return <ProjectSummary project={project} key={project.id} />;
          }) : <p>No projects yet...</p> }
      </div>
    );
  } else {
    return (
      <div>
        { projects?.length > 0 ? projects &&
          projects.map((project) => {
            return <ProjectSummary project={project} key={project.id} />;
          }):  <p>No projects yet...</p> }
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    uid: state.firebase.auth.uid,
    admin: state.admin.admin,
    superAdmin: state.admin.superAdmin,
  };
};

export default connect(mapStateToProps)(ProjectList);
