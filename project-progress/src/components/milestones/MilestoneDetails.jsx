import React from 'react';
import { connect } from 'react-redux';
import '../../index.css';
import moment from 'moment';
import { firestoreConnect }  from 'react-redux-firebase';
import { compose } from 'redux';
import { deleteMilestone } from '../../store/actions/milestoneActions';
import { toggleMilestoneStatus } from '../../store/actions/milestoneActions';
import Status from '../common/Status';
import Approve from '../common/Approve';
import Remove from '../common/Remove';
import AddRemarks from './AddRemarks';
import RemarkList from './RemarkList';
import { withRouter } from 'react-router-dom';


const MilestoneDetails = ({ remarks, auth, milestone, milestoneId, deleteMilestone, toggleMilestoneStatus, history}) => {


  const handleApprove = (milestone, milestoneId) => {
    if (milestone.status === true ){
    if (window.confirm('Mark this milestone as InProgress?'))
    toggleMilestoneStatus(milestone, milestoneId);
    }else{
      toggleMilestoneStatus(milestone, milestoneId);
    }
  }

  const handleDelete = (milestoneId, remarks) => {
    if ((remarks && remarks.length !==0) ){
        alert("Sorry! You can't remove a milestone that has remarks. Remove the remarks and try again.")
        }
    if((remarks && remarks.length === 0) || remarks === null){
        if (window.confirm('Remove this milestone?')){
            deleteMilestone(milestoneId);
            history.goBack();
        }
    } 
}

const goBack = () => {
  history.goBack();
}

    if (milestone && auth.uid === milestone.authorId) {
      return ( 
                <div className="container section">
                <div className="card z-depth-o grey lighten-3">
                <div className="card-content">
                <span className="card-title">{milestone.milestoneTitle}</span>
                <table>
                    <tbody>
                        <tr>
                            <td>
                            <i onClick = {goBack} className="small material-icons custom-link">arrow_back</i>
                            </td>
                            <td>
                            <Status status ={milestone.status}/>
                            </td>
                            <td>
                            <Approve onClick = {() => handleApprove(milestone, milestoneId)} status = {milestone.status}/>
                            </td>
                            <td>
                            <Remove onClick = {() => handleDelete(milestoneId, remarks)} />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p>{milestone.milestoneDesc}</p>
                </div>
                <div className="card-action gret lighten-4 grey-text custom-font-caps">
                   Milestone Added On: {moment(milestone.createdAt.toDate()).calendar()}
                </div>
                <AddRemarks milestoneId = {milestoneId} />
                <RemarkList milestoneId = {milestoneId} remarks = {remarks} />
            </div>
            </div> 
       );
    } else return null
}

const mapStateToProps = (state, ownProps) =>{
  const id = ownProps.match.params.id;
  const remarks = state.firestore.ordered.remarks;
  const milestones = state.firestore.data.milestones;
  const milestone = milestones ? milestones[id] : null;
  return {
      milestoneId: id,
      auth: state.firebase.auth,
      milestone: milestone,
      remarks: remarks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteMilestone: (milestoneId) => dispatch(deleteMilestone(milestoneId)),
    toggleMilestoneStatus: (milestone, milestoneId) => dispatch(toggleMilestoneStatus(milestone, milestoneId))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((ownProps) => [ "milestones", {
      collection: "milestones",
      doc: ownProps.match.params.id,
      subcollections: [{ collection: "remarks" }],
      storeAs: "remarks"
    }
]), withRouter
)(MilestoneDetails);
