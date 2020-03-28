import React, { Component } from "react";
import { connect } from "react-redux";
import "../../index.css";
import moment from "moment";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { deleteMilestone } from "../../store/actions/milestoneActions";
import { toggleMilestoneStatus } from "../../store/actions/milestoneActions";
import Status from "../common/Status";
import Approve from "../common/Approve";
import Remove from "../common/Remove";
import AddRemarks from "./AddRemarks";
import RemarkList from "./RemarkList";
import { withRouter } from "react-router-dom";
import firebase from "firebase/app";

class MilestoneDetails extends Component {
  _isMounted = false;
  state = {
    admin: "",
    superAdmin: ""
  };

  handleApprove = (milestone, milestoneId) => {
    if (milestone.status === true) {
      if (window.confirm("Mark this milestone as InProgress?"))
        this.props.toggleMilestoneStatus(milestone, milestoneId);
    } else {
      this.props.toggleMilestoneStatus(milestone, milestoneId);
    }
  };

  handleDelete = (milestoneId, remarks) => {
    if (remarks && remarks.length !== 0) {
      alert(
        "Sorry! You can't remove a milestone that has remarks. Remove the remarks and try again."
      );
    }
    if ((remarks && remarks.length === 0) || remarks === null) {
      if (window.confirm("Remove this milestone?")) {
        this.props.deleteMilestone(milestoneId);
        this.props.history.goBack();
      }
    }
  };

  goBack = () => {
    this.props.history.goBack();
  };

  componentDidMount() {
    this._isMounted = true;
    this.fireBaseListener = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        user.getIdTokenResult().then(idTokenResult => {
          if (this._isMounted) {
            this.setState({
              admin: idTokenResult.claims.admin,
              superAdmin: idTokenResult.claims.superAdmin
            });
            console.log(this.state);
          }
        });
      } else {
        if (this._isMounted) {
          this.setState({
            admin: "",
            superAdmin: ""
          });
        }
      }
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
    //    this.fireBaseListener && this.fireBaseListener();
    //    this.authListener = undefined;
  }

  render() {
    const { remarks, auth, milestone, milestoneId } = this.props;
    if (this.state.superAdmin) {
      if (milestone && auth.uid === milestone.authorId) {
        return (
          <div className="container section">
            Logged in as Co-ordinator...
            <div className="card z-depth-o grey lighten-3">
              <div className="card-content">
                <span className="card-title">{milestone.milestoneTitle}</span>
                <div className="flex-container">
                  <div>
                    <i
                      onClick={this.goBack}
                      className="small material-icons custom-link"
                    >
                      arrow_back
                    </i>
                  </div>
                  <div>
                    <Status status={milestone.status} />
                  </div>
                  <div>
                    <Approve
                      onClick={() => this.handleApprove(milestone, milestoneId)}
                      status={milestone.status}
                    />
                  </div>
                  <div>
                    <Remove
                      onClick={() => this.handleDelete(milestoneId, remarks)}
                    />
                  </div>
                </div>
                <p>{milestone.milestoneDesc}</p>
              </div>
              <div className="card-action gret lighten-4 grey-text custom-font-caps">
                Milestone Added On:{" "}
                {moment(milestone.createdAt.toDate()).calendar()}
              </div>
              <AddRemarks milestoneId={milestoneId} />
              <RemarkList
                milestoneId={milestoneId}
                remarks={remarks}
                admin={this.state.admin}
                superAdmin={this.state.superAdmin}
                auth={auth}
              />
            </div>
          </div>
        );
      } else return null;
    } else if (this.state.admin) {
      if (milestone && auth.uid === milestone.authorId) {
        return (
          <div className="container section">
            Logged in as Supervisor...
            <div className="card z-depth-o grey lighten-3">
              <div className="card-content">
                <span className="card-title">{milestone.milestoneTitle}</span>
                <div className="flex-container">
                  <div>
                    <i
                      onClick={this.goBack}
                      className="small material-icons custom-link"
                    >
                      arrow_back
                    </i>
                  </div>
                  <div>
                    <Status status={milestone.status} />
                  </div>
                  <div>
                    <Approve
                      onClick={() => this.handleApprove(milestone, milestoneId)}
                      status={milestone.status}
                    />
                  </div>
                  <div>
                    <Remove
                      onClick={() => this.handleDelete(milestoneId, remarks)}
                    />
                  </div>
                </div>
                <p>{milestone.milestoneDesc}</p>
              </div>
              <div className="card-action gret lighten-4 grey-text custom-font-caps">
                Milestone Added On:{" "}
                {moment(milestone.createdAt.toDate()).calendar()}
              </div>
              <AddRemarks milestoneId={milestoneId} />
              <RemarkList
                milestoneId={milestoneId}
                remarks={remarks}
                admin={this.state.admin}
                superAdmin={this.state.superAdmin}
                auth={auth}
              />
            </div>
          </div>
        );
      } else return null;
    } else if (milestone && auth.uid === milestone.authorId) {
      return (
        <div className="container section">
          Logged in as Student...
          <div className="card z-depth-o grey lighten-3">
            <div className="card-content">
              <span className="card-title">{milestone.milestoneTitle}</span>
              <div className="flex-container">
                <div>
                  <i
                    onClick={this.goBack}
                    className="small material-icons custom-link"
                  >
                    arrow_back
                  </i>
                </div>
                <div>
                  <Status status={milestone.status} />
                </div>
                <div>
                  <Remove
                    onClick={() => this.handleDelete(milestoneId, remarks)}
                  />
                </div>
              </div>
              <p>{milestone.milestoneDesc}</p>
            </div>
            <div className="card-action gret lighten-4 grey-text custom-font-caps">
              Milestone Added On:{" "}
              {moment(milestone.createdAt.toDate()).calendar()}
            </div>
            <RemarkList
              milestoneId={milestoneId}
              remarks={remarks}
              admin={this.state.admin}
              superAdmin={this.state.superAdmin}
              auth={auth}
            />
          </div>
        </div>
      );
    } else return null;
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const remarks = state.firestore.ordered.remarks;
  const milestones = state.firestore.data.milestones;
  const milestone = milestones ? milestones[id] : null;
  return {
    milestoneId: id,
    auth: state.firebase.auth,
    milestone: milestone,
    remarks: remarks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteMilestone: milestoneId => dispatch(deleteMilestone(milestoneId)),
    toggleMilestoneStatus: (milestone, milestoneId) =>
      dispatch(toggleMilestoneStatus(milestone, milestoneId))
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(ownProps => [
    "milestones",
    {
      collection: "milestones",
      doc: ownProps.match.params.id,
      subcollections: [
        { collection: "remarks", orderBy: ["createdAt", "desc"] }
      ],
      storeAs: "remarks"
    }
  ]),
  withRouter
)(MilestoneDetails);
