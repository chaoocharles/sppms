import React from 'react';
import RemarkDetails from './RemarkDetails';

const RemarkList = ({remarks, milestoneId, projectId}) => {

    return (
        <React.Fragment>
               {remarks && remarks.map(remark=>{
                   return (
                       <RemarkDetails remark={remark} milestoneId={milestoneId} projectId={projectId} key={remark.id} />
                   )
               }) }

        </React.Fragment>
    )
}


export default RemarkList