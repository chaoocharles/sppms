import React, { Component } from "react";
import "../../index.css";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { withRouter } from "react-router-dom";
import UserList from "./UserList";
import MemberList from "./MemberList";

class AllocationDetails extends Component {
  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    const { allocation, allocationId } = this.props;
    if (allocation) {
      return (
        <div className="container section">
          <div className="card z-depth-o custom-content-top-margin">
            <div className="card-content">
              <span className="card-title">{allocation.allocationName}</span>
              <div>
                <i
                  onClick={this.goBack}
                  className="small material-icons custom-link"
                >
                  arrow_back
                </i>
              </div>
              <MemberList allocationId={allocationId} allocation={allocation} />
              <hr />
              <UserList allocationId={allocationId} allocation={allocation} />
            </div>
          </div>
        </div>
      );
    } else return null;
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const allocations = state.firestore.data.allocations;
  const allocation = allocations ? allocations[id] : null;
  return {
    allocationId: id,
    auth: state.firebase.auth,
    allocation: allocation,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(() => ["allocations"]),
  withRouter
)(AllocationDetails);
