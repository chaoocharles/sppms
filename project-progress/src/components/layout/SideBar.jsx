import React from "react";

const SideBar = ({ click, show }) => {
  let sideBarClasses = "custom-sidebar";
  if (show) {
    sideBarClasses = "custom-sidebar open";
  }

  return (
    <nav className={sideBarClasses}>
      <ul>
        <li onClick={click}>
          <i
            className="material-icons white-text"
            style={{ cursor: "pointer" }}
          >
            close
          </i>
        </li>
        <li>Home</li>
        <li>Services</li>
      </ul>
    </nav>
  );
};

export default SideBar;
