import React from 'react';
import '../../index.css';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { connect } from 'react-redux';
import Status from '../common/Status';

const ProjectSummary = ({ project, uid }) => {

      if(uid === project.authorId){      
      return ( 
          <div>
           <table className="projectTable">
           <thead>
             <tr>
                 <th colSpan="3">
                   {project.projectTitle}
                   </th>
                 <th><Status status ={project.status}/></th>
             </tr>
           </thead>
           <tbody>
             <tr className="white">
               <td colSpan="4"><p className= "left">{project.projectDesc}</p></td>
             </tr>
             <tr>
               <td colSpan="3">
                  <div className = 'gret lighten-4 grey-text custom-font-caps'>
                  <div>{project.authorFirstName}  {project.authorLastName} {project.regNumber} {project.course}</div>
                  <div>Project Added On: {moment(project.createdAt.toDate()).calendar()}</div>
                  </div>
              </td>
              <td>
                <Link to = {'/project/' + project.id}><i className="small material-icons">arrow_forward</i></Link>
              </td>
             </tr>
           </tbody>
         </table>
         </div>
       );
      }else return null
}

const mapStateToProps = (state) =>{
  return {
      uid: state.firebase.auth.uid
  }
}
 
export default connect(mapStateToProps)(ProjectSummary);