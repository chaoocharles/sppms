import React, { Component } from 'react';
import ProjectList from '../projects/ProjectList';
import { CreateProjectButton } from '../layout/SignedInLinks';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import { Redirect } from 'react-router-dom';

class StudDashboard extends Component {
    
    render(){
        const { projects, auth } = this.props;
        if (!auth.uid) return <Redirect to = '/signin'/>
        
        return ( 
            <div className="dashboard">
                <div className="row">
                    <div className="col s12 m7">
                        <ProjectList projects={projects}/>
                    </div>
                    <div className="col s12 m4 offset-m1">
                        <CreateProjectButton/>
                    </div> 
                </div>
            </div>
         );
    }
}

const mapStateToProps = (state) =>{ 
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { 
        collection: 'projects',
    }
    ])
    )(StudDashboard);