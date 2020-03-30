import React from "react";

import "../../index.css";

const SideBarToggle = ({click}) => {
  return (
    <div className="custom-toggle-button" onClick = {click} >
      <i className="material-icons white-text">menu</i>
    </div>
  );
};

export default SideBarToggle;
