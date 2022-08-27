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
import Deadline from "./Deadline";

class MilestoneDetails extends Component {
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

  render() {
    const { remarks, auth, milestone, milestoneId, users } = this.props;

    const user = users?.find((u) => u.id === auth?.uid);

    let admin = false;
    let superAdmin = false;

    if (user) {
      admin = user.admin;
      superAdmin = user.superAdmin;
    }

    if (superAdmin) {
      if (milestone) {
        return (
          <div className="container section">
            <div className="card z-depth-o custom-content-top-margin">
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
                milestone added on:{" "}
                {moment(milestone.createdAt.toDate()).calendar()}
                <Deadline milestone={milestone} />
              </div>
              <AddRemarks milestoneId={milestoneId} />
              <RemarkList
                milestoneId={milestoneId}
                remarks={remarks}
                admin={admin}
                superAdmin={superAdmin}
                auth={auth}
              />
            </div>
          </div>
        );
      } else return null;
    } else if (admin) {
      if (milestone) {
        return (
          <div className="container section">
            <div className="card z-depth-o custom-content-top-margin">
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
                milestone added on:{" "}
                {moment(milestone.createdAt.toDate()).calendar()}
                <Deadline milestone={milestone} />
              </div>
              <AddRemarks milestoneId={milestoneId} />
              <RemarkList
                milestoneId={milestoneId}
                remarks={remarks}
                admin={admin}
                superAdmin={superAdmin}
                auth={auth}
              />
            </div>
          </div>
        );
      } else return null;
    } else if (milestone && auth.uid === milestone.authorId) {
      return (
        <div className="container section">
          <div className="card z-depth-o custom-content-top-margin">
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
              </div>
              <p>{milestone.milestoneDesc}</p>
            </div>
            <div className="card-action gret lighten-4 grey-text custom-font-caps">
              milestone added on:{" "}
              {moment(milestone.createdAt.toDate()).calendar()}
              <Deadline milestone={milestone} />
            </div>
            <RemarkList
              milestoneId={milestoneId}
              remarks={remarks}
              admin={admin}
              superAdmin={superAdmin}
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
    remarks: remarks,
    users: state.firestore.ordered.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteMilestone: (milestoneId) => dispatch(deleteMilestone(milestoneId)),
    toggleMilestoneStatus: (milestone, milestoneId) =>
      dispatch(toggleMilestoneStatus(milestone, milestoneId)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((ownProps) => [
    "milestones",
    {
      collection: "milestones",
      doc: ownProps.match.params.id,
      subcollections: [
        { collection: "remarks", orderBy: ["createdAt", "desc"] },
      ],
      storeAs: "remarks",
    },
    {
      collection: "users",
    },
  ]),
  withRouter
)(MilestoneDetails);
