import React, { Component } from "react";
import moment from "moment";
import { Link } from "react-router-dom";

class AllocationSummary extends Component {
  state = {};
  render() {
    const { allocation } = this.props;
    return (
      <div>
        <table className="custom-table-style">
          <thead>
            <tr>
              <th colSpan="3">{allocation.allocationName}</th>
              <th>
                <span className="number-badge">
                  <span>
                    {allocation.members ? allocation.members.length : 0}
                  </span>
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="3">
                <div className="gret lighten-4 grey-text custom-font-caps">
                  <div>
                    Created On:{" "}
                    {moment(allocation.createdAt.toDate()).calendar()}
                  </div>
                </div>
              </td>
              <td>
                <Link to={"/allocation/" + allocation.id}>
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
  }
}

export default AllocationSummary;
