import React from "react";
import "../../index.css";
import { Link } from "react-router-dom";
import moment from "moment";
import Status from "../common/Status";

const milestoneSummary = ({ milestone, projectId }) => {
  if (projectId === milestone.projectId) {
    return (
      <div>
        <table className="projectTable">
          <thead>
            <tr>
              <th colSpan="3">{milestone.milestoneTitle}</th>
              <th>
                <Status status={milestone.status} />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="4">
                <p className="left">{milestone.milestoneDesc}</p>
              </td>
            </tr>
            <tr>
              <td colSpan="3">
                <div className="gret lighten-4 grey-text custom-font-caps">
                  <div>
                    milestone Added On:{" "}
                    {moment(milestone.createdAt.toDate()).calendar()}
                  </div>
                </div>
              </td>
              <td>
                <Link to={"/milestone/" + milestone.id}>
                  <i className="small material-icons custom-link">
                    arrow_forward
                  </i>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  } else return null;
};

export default milestoneSummary;
