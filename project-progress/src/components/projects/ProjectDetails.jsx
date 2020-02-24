import React from 'react';

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return ( 
    <div className="container section project-details">
     <div className="card z-depth-o">
         <div className="card-content">
             <span className="card-title">Project Title - id:{id}</span>
             <p>Some content goes here.</p>
         </div>
         <div className="card-action gret lighten-4 grey-text">
             <div>Posted by Chaoo Charles</div>
             <div>Date: Feb 2020</div>
         </div>
     </div>
    </div> 
    );
}
 
export default ProjectDetails;