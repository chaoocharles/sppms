import React, { Component } from "react";
import { connect } from "react-redux";
import { addMember } from "../../store/actions/allocationActions";

class User extends Component {
  state = {};

  handleClick = (user, allocationId, allocation) => {
    this.props.addMember(user, allocationId, allocation);
    console.log(user);
  };

  render() {
    const { user, allocationId, allocation } = this.props;
    return (
      <>
        <label
          className="custom-user-ui"
          onClick={() => this.handleClick(user, allocationId, allocation)}
        >
          <i className="material-icons cyan-text">add_box</i>
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
