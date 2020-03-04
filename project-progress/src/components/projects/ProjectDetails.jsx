import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect }  from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

const ProjectDetails = (props) => {
    const { project, auth } = props;

    if (!auth.uid) return <Redirect to = '/signin' />
    
    if (project) {
        return (
            <div className="container section project-details">
                <div className="card z-depth-o">
                <div className="card-content">
                <span className="card-title">{project.projectTitle}</span>
                <p>{project.projectDesc}</p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>Posted by {project.regNumber}</div>
                <div>Date: Feb 2020</div>
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