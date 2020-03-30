import React from "react";
import "../../index.css";

const BackDrop = ({ click }) => {
  return <div className="custom-backdrop" onClick={click} />;
};

export default BackDrop;
