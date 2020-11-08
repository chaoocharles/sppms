import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";
import { Redirect } from "react-router-dom";

class CreateProject extends Component {
  state = {
    projectTitle: "",
    regNumber: "",
    course: "",
    projectDesc: "",
    status: false,
    projectA: false
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createProject(this.state);
    this.props.history.push("/");
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="container">
        <form
          onSubmit={this.handleSubmit}
          className="white custom-content-top-margin"
          autoComplete= "off"
          classname= "project-form"
        >
          <h5 className="grey-text text-darken-3">Create New Project</h5>
          <div className="input-field">
            <label htmlFor="projectTitle">Project Title</label>
            <input type="text" id="projectTitle" onChange={this.handleChange} required/>
          </div>
          <div className="input-field">
            <label htmlFor="regNumber">Reg Number</label>
            <input type="text" id="regNumber" onChange={this.handleChange} required/>
          </div>
          <div className="input-field">
            <label htmlFor="course">Course (e.g. BTECH I.T)</label>
            <input type="text" id="course" onChange={this.handleChange} required/>
          </div>
          <div className="input-field">
            <label htmlFor="projectDesc">Project's Short Description</label>
            <input type="text" id="projectDesc" onChange={this.handleChange} required/>
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
    createProject: project => dispatch(createProject(project))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
