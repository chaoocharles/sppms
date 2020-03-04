import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = ({projects}) => {

    if(projects) {
        return (
        <div className="container section project-details">

               {projects && projects.map(project=>{
                   return (
                       <ProjectSummary project={project} key={project.id}/>
                   )
               }) }

        </div>
    )
}else {
        return ( 
            <div className='container center cyan-text'>
                        <p>Loading...</p>
                    </div>
         );
    }
}
 
export default ProjectList;