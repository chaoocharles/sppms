import React from 'react';
import '../../index.css'

const ProjectSummary = () => {
    return ( 
        <div>
         <table className="tableStyle">
         <thead>
           <tr>
               <th colspan="2">Project Title</th>
               <th><span class="badge blue white-text left">In Progress</span></th>
           </tr>
         </thead>
         <tbody>
           <tr>
             <td colspan="3"><p class= "left">Some Content Goes Here. Tables are a nice way to organize a lot of data. We provide a few utility classes to help you style your table as easily as possible. In addition, to improve mobile experience, all tables on mobile-screen widths are centered automatically.</p></td>
           </tr>
           <tr>
             <td colSpan="2">
             <div className = 'gret lighten-4 grey-text'>
            <div>Posted by Chaoo Charles</div>
            <div>Date: Feb 2020</div>
            </div>
            </td>
            <td>
            <button className="btn red darken-2 z-depth-0">DELETE</button>
            </td>
           </tr>
         </tbody>
       </table>
       </div>
     );
}
 
export default ProjectSummary;