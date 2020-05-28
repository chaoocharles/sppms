import React, { Component } from "react";
import { connect } from "react-redux";
import { addAllocation } from "../../store/actions/allocationActions";
import { Redirect } from "react-router-dom";
import "../../index.css";

class AddAllocation extends Component {
  state = {
    allocationName: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addAllocation(this.state);
    document.getElementById("add-allocation-form").reset();
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div>
        <form
          id="add-allocation-form"
          onSubmit={this.handleSubmit}
          className="white createMilestone"
        >
          <h5 className="grey-text text-darken-3">Add New Allocation</h5>
          <div className="input-field">
            <label htmlFor="allocationName">Allocation Name</label>
            <input
              type="text"
              id="allocationName"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <button className="btn cyan darken-2 z-depth-0">ADD</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addAllocation: allocationName => dispatch(addAllocation(allocationName))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddAllocation);
