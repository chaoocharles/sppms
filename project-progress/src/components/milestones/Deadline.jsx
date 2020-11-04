import React from 'react';
import moment from "moment";

const Deadline = ({milestone}) => {
        if(moment(milestone.endDate.toDate()).isAfter(new Date()) && milestone.status !== true){
            return <div className="cyan-text">
            deadline:{" "}
            {moment(milestone.endDate.toDate()).calendar()} - in progress
          </div>
          }else if(moment(milestone.endDate.toDate()).isAfter(new Date()) && milestone.status === true){
            return <div className="green-text">
            deadline:{" "}
            {moment(milestone.endDate.toDate()).calendar()} - congraturations! completed before deadline
          </div>
          } else if(moment(milestone.endDate.toDate()).isBefore(new Date()) && milestone.status === true){
            return <div className="green-text">
            deadline:{" "}
            {moment(milestone.endDate.toDate()).calendar()} - completed
          </div>
          }else if(moment(milestone.endDate.toDate()).isBefore(new Date()) && milestone.status !== true){
            return <div className="red-text">
            deadline:{" "}
            {moment(milestone.endDate.toDate()).calendar()} - deadline missed.
          </div>
          }
}
 
export default Deadline;