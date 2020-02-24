import React, { Component } from 'react';
import StudDashboard from './StudDashboard';

class Dashboard extends Component {
    
    render(){
        return ( 
            <div className="dashboard container">
              <StudDashboard/>
            </div>
         );
    }
}

export default Dashboard;