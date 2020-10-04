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
        <h5>{allocation.members ? allocation.members.length : 0} Members</h5>
        <h6>
          {allocation.members?.length > 0 ? (
            <span>Click members to remove them from this group... </span>
          ) : (
            <span>No members yet...</span>
          )}
        </h6>
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
