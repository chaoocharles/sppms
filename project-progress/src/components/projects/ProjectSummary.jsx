import React from 'react';

const ProjectSummary = () => {
    return ( 
            <div className="card z-depth-0 project-summary">
            <div className="card-content">
            <span className="card-title">Project Title</span>
            <span class="badge blue white-text left">In Progress</span><br/>
                <p>Some Content Goes Here.</p>
            </div>
            <div className = 'card-action gret lighten-4 grey-text'>
            <div>Posted by Chaoo Charles</div>
            <div>Date: Feb 2020</div>
            </div>
        </div>
     );
}
 
export default ProjectSummary;