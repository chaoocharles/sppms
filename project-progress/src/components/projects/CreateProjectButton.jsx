import React from "react";
import { Link } from "react-router-dom";

export const CreateProjectButton = () => {
  return (
    <div className="createProjectBtn">
      <Link to="/createproject" className="btn cyan darken-2 z-depth-0">
        ADD A PROJECT
      </Link>
    </div>
  );
};
