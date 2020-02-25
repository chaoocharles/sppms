import React, { Component } from 'react';
import ProjectList from '../projects/ProjectList';
import { CreateProjectButton } from '../layout/SignedInLinks';

class Dashboard extends Component {
    
    render(){
        return ( 
            <div className="dashboard">
                <div className="row">
                    <div className="col s12 m7">
                        <ProjectList/>
                    </div>
                    <div className="col s12 m4 offset-m1">
                        <CreateProjectButton/>
                    </div> 
                </div>
            </div>
         );
    }
}

export default Dashboard;