import React, { Component } from 'react';
import ProjectList from '../projects/ProjectList';
import { CreateProjectButton } from '../layout/SignedInLinks';
import {connect} from 'react-redux';

class StudDashboard extends Component {
    
    render(){
        const { projects } = this.props;
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
        projects: state.project.projects
    }
}

export default connect(mapStateToProps)(StudDashboard);