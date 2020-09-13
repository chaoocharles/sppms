import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import AddAllocation from "./AddAllocation";
import { firestoreConnect } from "react-redux-firebase";
import AllocationList from "./AllocationList";

class Allocations extends Component {
  state = {};
  render() {
    const { allocations } = this.props;
    return (
      <div className="container custom-content-top-margin">
        <div className="row">
          <div className="col s12 m7">
            <AllocationList allocations={allocations} />
          </div>
          <div className="col s12 m4 offset-m1">
            <AddAllocation />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    allocations: state.firestore.ordered.allocations
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "allocations",
      orderBy: ["createdAt", "desc"]
    }
  ])
)(Allocations);
