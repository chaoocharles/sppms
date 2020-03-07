import React from 'react';
import ProjectSummary from './ProjectSummary';

const MilestoneList = ({}) => {

    return (
        <div className="container section project-details">

               {projects && projects.map(project=>{
                   return (
                       <ProjectSummary project={project} key={project.id}/>
                   )
               }) }

        </div>
    )
}
 
export default MilestoneList;