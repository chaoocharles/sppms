import React from "react";

const ProjectAStatus = (props) => {
  const { projectA, onClick } = props;
  if (projectA === true) {
    return (
      <i onClick={onClick} className="material-icons green-text">
        check_box
      </i>
    );
  } else {
    return (
      <i onClick={onClick} className="material-icons">
        check_box_outline_blank
      </i>
    );
  }
};

export default ProjectAStatus;
