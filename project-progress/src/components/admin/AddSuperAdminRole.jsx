import React, { Component } from "react";
import { connect } from "react-redux";
import { addSuperAdminRole } from "../../store/actions/adminActions";
import { Redirect } from "react-router-dom";
import "../../index.css";

class AddSuperAdminRole extends Component {
  state = {
    adminEmail: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const adminEmail = this.state.adminEmail;
    this.props.addSuperAdminRole(adminEmail);
    document.getElementById("add-superAdmin-form").reset();
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="admin-form">
        <form
          id="add-superAdmin-form"
          onSubmit={this.handleSubmit}
          className="white createMilestone"
        >
          <h5 className="grey-text text-darken-3">Add Coordinator</h5>
          <div className="input-field">
            <label htmlFor="adminEmail">User Email</label>
            <input type="email" id="adminEmail" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn cyan darken-2 z-depth-0">
              MAKE COORDITOR
            </button>
            <div className="center">
              {this.props.addSuperAdminMessage ? (
                <p className="green-text">{this.props.addSuperAdminMessage}</p>
              ) : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    addSuperAdminMessage: state.admin.addSuperAdminMessage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addSuperAdminRole: adminEmail => dispatch(addSuperAdminRole(adminEmail))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddSuperAdminRole);
