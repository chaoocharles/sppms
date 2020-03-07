import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect }  from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import '../../index.css';
import CreateMilestone from '../milestones/CreateMilestone';
import MilestoneList from '../milestones/MilestoneList';

const ProjectDetails = (props) => {
    const { projectId, project, auth, milestones } = props;

    if (!auth.uid) return <Redirect to = '/signin' />
    
    if (project && auth.uid === project.authorId) {
        return (
            <div className="container section project-details">
                <div className="card z-depth-o grey lighten-3">
                <div className="card-content">
                <span className="card-title">{project.projectTitle}</span>
                <p>{project.projectDesc}</p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>{project.authorFirstName}  {project.authorLastName} {project.regNumber} {project.course}</div>
                <div>Project Added On: {moment(project.createdAt.toDate()).calendar()}</div>
                </div>
                <CreateMilestone projectId = {projectId}/>
                <MilestoneList milestones = {milestones} projectId = {projectId}/>
            </div>
            </div> 
        )
    } else {
        return ( 
                <div className='container center cyan-text'>
                    <p>Loading...</p>
                </div>
            );
    }
}

const mapStateToProps = (state, ownProps) =>{
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const milestones = state.firestore.ordered.milestones;
    const project = projects ? projects[id] : null;
    return {
        projectId: id,
        project: project,
        auth: state.firebase.auth,
        milestones: milestones
    }
}
 
export default compose(
    connect(mapStateToProps),
    firestoreConnect((ownProps) => [ "projects", {
        collection: "projects",
        doc: ownProps.match.params.id,
        subcollections: [{ collection: "milestones" }],
        storeAs: "milestones"
      }
 ])
)(ProjectDetails);