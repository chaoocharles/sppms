import React from 'react';
import { connect } from 'react-redux';
import '../../index.css';
import moment from 'moment';
import { deleteMilestone } from '../../store/actions/milestoneActions';

const MilestoneSummary = ({ milestone, projectId, deleteMilestone}) => {

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
                   {milestone.milestoneTitle}
                   </th>
                 <th><span className="custom-badge blue white-text left">In Progress</span></th>
             </tr>
           </thead>
           <tbody>
             <tr className="white">
               <td colSpan="3"><p className= "left">{milestone.milestoneDesc}</p></td>
             </tr>
             <tr>
               <td colSpan="2">
               <div className = 'gret lighten-4 grey-text'>
              <div>Milestone Added On: {moment(milestone.createdAt.toDate()).calendar()}</div>
              </div>
              </td>
              <td>
              <button onClick = {() => handleDelete(milestone)} className="btn red darken-2 z-depth-0">REMOVE</button>
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
  }
}

export default connect(null, mapDispatchToProps)(MilestoneSummary);