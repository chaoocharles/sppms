import React, { Component } from "react";
import { connect } from "react-redux";
import { addAdminRole } from "../../store/actions/adminActions";
import { Redirect } from "react-router-dom";
import "../../index.css";

class AddAdminRole extends Component {
  state = {
    userEmail: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const userEmail = this.state.userEmail;
    this.props.addAdminRole(userEmail);
    document.getElementById("add-admin-form").reset();
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="admin-form">
        <form
          id="add-admin-form"
          onSubmit={this.handleSubmit}
          className="white createMilestone"
        >
          <h5 className="grey-text text-darken-3">Add Supervisor</h5>
          <div className="input-field">
            <label htmlFor="userEmail">User Email</label>
            <input type="email" id="userEmail" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn cyan darken-2 z-depth-0">
              MAKE SUPERVISOR
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addAdminRole: (userEmail) => dispatch(addAdminRole(userEmail)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddAdminRole);
