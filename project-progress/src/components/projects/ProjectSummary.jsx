import React, { Component } from 'react';
import '../../index.css';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { connect } from 'react-redux';
import { deleteProject } from '../../store/actions/projectActions';
import { addProjectId } from '../../store/actions/milestoneActions';


class ProjectSummary extends Component {
  
 handleDelete = (project) => {
  if (window.confirm('Are you sure you want to remove this project?'))
    this.props.deleteProject(project);
  }

handleAddProjectId = (project) =>{
this.props.addProjectId(project.id)
}

  render(){
    const {project, uid} = this.props
    if(uid === project.authorId){
      return ( 
          <div>
           <table className="projectTable">
           <thead>
             <tr>
                 <th onClick = {() => this.handleAddProjectId(project)}  colSpan="2">
                   <Link to = {'/project/' + project.id}>{project.projectTitle}</Link>
                   </th>
                 <th><span className="custom-badge blue white-text left">In Progress</span></th>
             </tr>
           </thead>
           <tbody>
             <tr className="content">
               <td colSpan="3"><p className= "left">{project.projectDesc}</p></td>
             </tr>
             <tr>
               <td colSpan="2">
               <div className = 'gret lighten-4 grey-text'>
              <div>{project.authorFirstName}  {project.authorLastName} {project.regNumber} {project.course}</div>
              <div>{moment(project.createdAt.toDate()).calendar()}</div>
              </div>
              </td>
              <td>
              <button onClick = {() => this.handleDelete(project)} className="btn red darken-2 z-depth-0">REMOVE</button>
              </td>
             </tr>
           </tbody>
         </table>
         </div>
       );
      }else return null
  }
}

const mapStateToProps = (state) =>{
  console.log(state)
  return {
      uid: state.firebase.auth.uid
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProject: (project) => dispatch(deleteProject(project)),
    addProjectId: (projectId) => dispatch(addProjectId(projectId))
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(ProjectSummary);