import React from 'react';
import '../../index.css';
import moment from 'moment';

const MilestoneSummary = ({ milestone, projectId }) => {
  
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
              <button className="btn red darken-2 z-depth-0">REMOVE</button>
              </td>
             </tr>
           </tbody>
         </table>
         </div>
       );
      }else return null
}

export default MilestoneSummary;