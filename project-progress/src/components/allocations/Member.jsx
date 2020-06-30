import React, { Component } from "react";
import { connect } from "react-redux";
import { removeMember } from "../../store/actions/allocationActions";
import { _toggleAllocated } from "../../store/actions/allocationActions";

class Member extends Component {
  state = {};

  handleRemove = (member, allocationId, allocation) => {
    this.props.removeMember(member, allocationId, allocation);
    this.props._toggleAllocated(member)
    console.log(member);
  };

  render() {
    const { member, allocationId, allocation } = this.props;
    return (
      <>
        <label
          className="custom-member-ui"
          onClick={() => this.handleRemove(member, allocationId, allocation)}
        >
          <i className="material-icons custom-icon-margin light-blue-text">
            card_membership
          </i>
          <span>
            <span className="custom-font-caps">
              {member.firstName} {member.lastName}
            </span>
            - {member.email}
          </span>
        </label>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeMember: (member, allocationId, allocation) =>
      dispatch(removeMember(member, allocationId, allocation)),
    _toggleAllocated: (user) => dispatch(_toggleAllocated(user)),
  };
};

export default connect(null, mapDispatchToProps)(Member);
