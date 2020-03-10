import React from 'react';
import { connect } from 'react-redux';
import '../../index.css';
import moment from 'moment';
import { deleteMilestone } from '../../store/actions/milestoneActions';
import { toggleMilestoneStatus } from '../../store/actions/milestoneActions';
import Status from '../common/Status';
import Approve from '../common/Approve';
import Remove from '../common/Remove';
import AddRemarks from './AddRemarks';
import RemarkList from './RemarkList';


const MilestoneDetails = ({ remarks, milestone, projectId, deleteMilestone, toggleMilestoneStatus}) => {


  const handleApprove = (milestone) => {
    if (milestone.status === true ){
    if (window.confirm('Mark this milestone as InProgress?'))
    toggleMilestoneStatus(milestone);
    }else{
      toggleMilestoneStatus(milestone);
    }
  }

  const handleDelete = (milestone, remarks) => {
        remarks && remarks.map(remark=>{
        if (milestone.id === remark.milestoneId){
            alert("Sorry! You can't remove a milestone that has remarks.")
            } 
            if(remark && milestone.id !== remark.milestoneId){
              if (window.confirm('Remove this milestone?')){
                  deleteMilestone(milestone);
              }
          } 
            return null
        })
        if(remarks.length === 0){
            if (window.confirm('Remove this milestone?')){
                deleteMilestone(milestone);
            }
        } 
    }
  
      if(projectId === milestone.projectId){
      return ( 
          <div>
           <table className="projectTable">
           <thead>
             <tr>
                 <th colSpan="2">
                   {milestone.milestoneTitle}/{milestone.id}
                   </th>
                 <th><Status status ={milestone.status}/></th>
             </tr>
           </thead>
           <tbody>
             <tr className="white">
               <td colSpan="3"><p className= "left">{milestone.milestoneDesc}</p></td>
             </tr>
             <tr className="white">
              <td colSpan="3">
                  <RemarkList milestoneId = {milestone.id} remarks = {remarks} projectId = {projectId} />
              </td>
             </tr>
             <tr className="white">
               <AddRemarks milestone = {milestone} />
             </tr>
             <tr>
               <td>
               <div className = 'gret lighten-4 grey-text'>
              <div>Milestone Added On: {moment(milestone.createdAt.toDate()).calendar()}</div>
              </div>
              </td>
              <td>
                <Approve onClick = {() => handleApprove(milestone)} status = {milestone.status}/>
              </td>
              <td>
                <Remove onClick = {() => handleDelete(milestone, remarks)} />
              </td>
             </tr>
           </tbody>
         </table>
         </div>
       );
      }else return null
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteMilestone: (milestone) => dispatch(deleteMilestone(milestone)),
    toggleMilestoneStatus: (milestone) => dispatch(toggleMilestoneStatus(milestone))
  }
}

export default connect(null, mapDispatchToProps)(MilestoneDetails);