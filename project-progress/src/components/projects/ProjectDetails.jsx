import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect }  from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import { Link } from 'react-router-dom';
import '../../index.css';

const ProjectDetails = (props) => {
    const { project, auth } = props;

    if (!auth.uid) return <Redirect to = '/signin' />
    
    if (project && auth.uid === project.authorId) {
        return (
            <div className="container section project-details">
                <div className="card z-depth-o">
                <div className="card-content">
                <span className="card-title">{project.projectTitle}</span>
                <p>{project.projectDesc}</p>
                </div>
                <div className="createMilestoneBtn">
                <Link to='/createmilestone' className="btn cyan darken-2 z-depth-0">ADD MILESTONE</Link>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>{project.authorFirstName}  {project.authorLastName} {project.regNumber} {project.course}</div>
                <div>{moment(project.createdAt.toDate()).calendar()}</div>
                </div>
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
    const project = projects ? projects[id] : null;
    return {
        project: project,
        auth: state.firebase.auth
    }
}
 
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
            { collection: 'projects'}
        ])
)(ProjectDetails);