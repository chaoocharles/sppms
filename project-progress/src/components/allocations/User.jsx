import React, { Component } from "react";
import { connect } from "react-redux";
import { addMember } from "../../store/actions/allocationActions";

class User extends Component {
  state = {};

  handleAdd = (user, allocationId, allocation) => {
    this.props.addMember(user, allocationId, allocation);
    console.log(user);
  };

  render() {
    const { user, allocationId, allocation } = this.props;
    return (
      <>
        <label
          className="custom-user-ui"
          onClick={() => this.handleAdd(user, allocationId, allocation)}
        >
          <i className="material-icons custom-icon-margin cyan-text">
            account_box
          </i>
          <span>
            <span className="custom-font-caps">
              {user.firstName} {user.lastName}
            </span>
            - {user.email}
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
  };
};

export default connect(null, mapDispatchToProps)(User);
