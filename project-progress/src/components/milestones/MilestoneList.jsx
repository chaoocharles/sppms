import React from 'react';
import MilestoneSummary from './MilestoneSummary';

const MilestoneList = ({milestones, projectId}) => {

    return (
        <div className="container section project-details">

               {milestones && milestones.map(milestone=>{
                   return (
                       <MilestoneSummary milestone={milestone} projectId={projectId} key={milestone.id}/>
                   )
               }) }

        </div>
    )
}


export default MilestoneList