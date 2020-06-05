import React, { Component } from "react";
import moment from "moment";
import { Link } from "react-router-dom";

class AllocationSummary extends Component {
  state = {};
  render() {
    const { allocation } = this.props;
    return (
      <div>
        <table className="projectTable">
          <thead>
            <tr>
              <th colSpan="2">{allocation.allocationName}</th>
              <th>5</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="3">
                <div className="gret lighten-4 grey-text custom-font-caps">
                  <div>
                    Allocation Added On:{" "}
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
