import React from "react";

const ShowMembers = ({ member }) => {
  return (
    <div className = "member">
      <span>
        {member.firstName} {member.lastName}- {member.email}
      </span>
    </div>
  );
};

export default ShowMembers;
