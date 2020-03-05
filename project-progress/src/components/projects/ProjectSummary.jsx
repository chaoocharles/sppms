import React from 'react';
import '../../index.css';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { connect } from 'react-redux';
import { deleteProject } from '../../store/actions/projectActions';


const ProjectSummary = ({project, uid, deleteProject}) => {
      
 const handleDelete = (project) => {
  if (window.confirm('Are you sure you want to remove this project?'))
    deleteProject(project);
  }


  if(uid === project.authorId){
    return ( 
        <div>
         <table className="projectTable">
         <thead>
           <tr>
               <th colSpan="3">
                 <Link to = {'/project/' + project.id}>{project.projectTitle}</Link>
                 </th>
               <th><span className="badge blue white-text left">In Progress</span></th>
           </tr>
         </thead>
         <tbody>
           <tr className="content">
             <td colSpan="4"><p className= "left">{project.projectDesc}</p></td>
           </tr>
           <tr>
             <td colSpan="3">
             <div className = 'gret lighten-4 grey-text'>
            <div>{project.authorFirstName}  {project.authorLastName} {project.regNumber}</div>
            <div>{moment(project.createdAt.toDate()).calendar()}</div>
            </div>
            </td>
            <td>
            <button onClick = {() => handleDelete(project)} className="btn red darken-2 z-depth-0">REMOVE</button>
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

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProject: (project) => dispatch(deleteProject(project))
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(ProjectSummary);