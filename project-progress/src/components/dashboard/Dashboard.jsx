import React, { Component } from 'react';
import StudDashboard from './StudDashboard';

class Dashboard extends Component {
    
    render(){
        return ( 
            <div className="dashboard">
              <StudDashboard/>
            </div>
         );
    }
}

export default Dashboard;