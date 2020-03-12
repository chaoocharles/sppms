import React from 'react';
import MilestoneSummary from './MilestoneSummary';

const MilestoneList = ({milestones, projectId}) => {

    return (
        <div>
               {milestones && milestones.map(milestone=>{
                   return (
                       <MilestoneSummary milestone={milestone} projectId={projectId} key={milestone.id} />
                   )
               }) }

        </div>
    )
}


export default MilestoneList