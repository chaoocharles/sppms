import React from "react";

const ShowMembers = ({ member }) => {
  let roleClasses = "";

  if (member && member.role === "coordinator") {
    roleClasses = "coordinator-level";
  } else if (member && member.role === "supervisor") {
    roleClasses = "supervisor-level";
  } else {
    roleClasses = "";
  }
  return (
    <div className="member">
      <span>
        {member.firstName} {member.lastName}- {member.email} <span className={roleClasses}>{member.role}</span>
      </span>
    </div>
  );
};

export default ShowMembers;
