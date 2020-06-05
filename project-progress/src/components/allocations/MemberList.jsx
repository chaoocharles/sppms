import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "../../index.css";
import Member from "./Member";

class MemberList extends Component {
  state = {};

  render() {
    const { auth, allocation, allocationId } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div>
        <h5>Members</h5>
        <h6>Click members to remove them from this group...</h6>
        <p>
          {allocation.members &&
            allocation.members.map((member) => {
              return (
                <Member
                  member={member}
                  allocationId={allocationId}
                  allocation={allocation}
                  key={member.email}
                />
              );
            })}
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(MemberList);
