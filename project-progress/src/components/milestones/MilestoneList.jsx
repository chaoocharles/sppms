import React from 'react';
import MilestoneDetails from './MilestoneDetails';

const MilestoneList = ({milestones, projectId}) => {

    return (
        <div className="container section project-details">

               {milestones && milestones.map(milestone=>{
                   return (
                       <MilestoneDetails milestone={milestone} projectId={projectId} key={milestone.id} />
                   )
               }) }

        </div>
    )
}


export default MilestoneList