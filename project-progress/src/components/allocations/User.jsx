import React, { Component } from "react";
import { connect } from "react-redux";
import { addMember } from "../../store/actions/allocationActions";
import { toggleAllocated } from "../../store/actions/allocationActions";

class User extends Component {
  state = {};

  handleAdd = (user, allocationId, allocation) => {
    this.props.addMember(user, allocationId, allocation);
    this.props.toggleAllocated(user);
  };

  render() {
    const { user, allocationId, allocation } = this.props;
    if (user.allocated) return null;

    let roleClasses = "";

    if (user && user.role === "coordinator") {
      roleClasses = "coordinator-level";
    } else if (user && user.role === "supervisor") {
      roleClasses = "supervisor-level";
    } else {
      roleClasses = "";
    }

    return (
      <>
        <label
          className="custom-user-ui"
          onClick={() => this.handleAdd(user, allocationId, allocation)}
        >
          <i className="material-icons custom-icon-margin cyan-text">
            account_box
          </i>
          <span className="user">
            <span className="custom-font-caps">
              {user.firstName} {user.lastName}
            </span>
            - {user.email} <span className={roleClasses}>{user.role}</span>
          </span>
        </label>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMember: (user, allocationId, allocation) =>
      dispatch(addMember(user, allocationId, allocation)),
    toggleAllocated: (user) => dispatch(toggleAllocated(user)),
  };
};

export default connect(null, mapDispatchToProps)(User);
