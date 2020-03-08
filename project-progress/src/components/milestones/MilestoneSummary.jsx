import React from 'react';
import { connect } from 'react-redux';
import '../../index.css';
import moment from 'moment';
import { deleteMilestone } from '../../store/actions/milestoneActions';
import { toggleMilestoneStatus } from '../../store/actions/milestoneActions';
import Status from '../common/Status';
import Approve from '../common/Approve';
import Remove from '../common/Remove';


const MilestoneSummary = ({ milestone, projectId, deleteMilestone, toggleMilestoneStatus}) => {

  const handleApprove = (milestone) => {
    if (milestone.status === true ){
    if (window.confirm('Are you sure you want to mark this milestone as incomplete?'))
    toggleMilestoneStatus(milestone);
    }else{
      toggleMilestoneStatus(milestone);
    }
  }

  const handleDelete = (milestone) => {
    if (window.confirm('Are you sure you want to remove this milestone?'))
      deleteMilestone(milestone);
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
               <td colSpan="3"><p className= "left">Remarks Goes here</p></td>
             </tr>
             <tr className="white">
               <td colSpan="2">
                  <div className="input-field">
                        <label htmlFor="milestoneRemarks">Enter Remarks</label>
                        <input type="text" id="milestoneRemarks"/>
                  </div>
               </td>
               <td>
              <button className="btn cyan darken-2 z-depth-0">SEND</button>
              </td>
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
                <Remove onClick = {() => handleDelete(milestone)} />
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

export default connect(null, mapDispatchToProps)(MilestoneSummary);