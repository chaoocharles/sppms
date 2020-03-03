import React from 'react';
import '../../index.css';
import { Link } from 'react-router-dom';

const ProjectSummary = ({project}) => {
    return ( 
        <div>
         <table className="projectTable">
         <thead>
           <tr>
               <th colSpan="2">
                 <Link to = {'/project/' + project.id}>{project.projectTitle}</Link>
                 </th>
               <th><span className="badge blue white-text left">In Progress</span></th>
           </tr>
         </thead>
         <tbody>
           <tr className="content">
             <td colSpan="3"><p className= "left">{project.projectDesc}</p></td>
           </tr>
           <tr>
             <td colSpan="2">
             <div className = 'gret lighten-4 grey-text'>
            <div>Posted by: {project.regNumber}</div>
            <div>Date: Feb 2020</div>
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
}
 
export default ProjectSummary;