import React from 'react';
import MilestoneDetails from './MilestoneDetails';

const MilestoneList = ({milestones, projectId, remarks}) => {

    return (
        <div>
               {milestones && milestones.map(milestone=>{
                   return (
                       <MilestoneDetails milestone={milestone} projectId={projectId} remarks = {remarks} key={milestone.id} />
                   )
               }) }

        </div>
    )
}


export default MilestoneList