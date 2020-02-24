import React, { Component } from 'react';
import ProjectList from '../projects/ProjectList';

class Dashboard extends Component {
    
    render(){
        return ( 
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        Side Column
                    </div> 
                </div>
            </div>
         );
    }
}

export default Dashboard;