import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateProject from "./components/projects/CreateProject";
import CreateMilestone from "./components/milestones/CreateMilestone";
import MilestoneDetails from "./components/milestones/MilestoneDetails";
import SideBar from "./components/layout/SideBar";
import BackDrop from "./components/layout/BackDrop";

class App extends Component {
  state = {
    sideBarOpen: false
  };

  handleSideBarToggle = () => {
    this.setState(prevState => {
      return { sideBarOpen: !prevState.sideBarOpen };
    });
  };

  handleSideBarClose = () => {
    this.setState({
      sideBarOpen: false
    });
  };

  render() {
    let backDrop;

    if (this.state.sideBarOpen) {
      backDrop = <BackDrop click={this.handleSideBarClose} />;
    }
    return (
      <BrowserRouter>
        <div style={{ height: "100%" }}>
          <Navbar handleSideBarToggle={this.handleSideBarToggle} />
          <SideBar
            click={this.handleSideBarClose}
            show={this.state.sideBarOpen}
          />
          {backDrop}
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/project/:id" component={ProjectDetails} />
            <Route path="/milestone/:id" component={MilestoneDetails} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/createproject" component={CreateProject} />
            <Route path="/createmilestone" component={CreateMilestone} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
