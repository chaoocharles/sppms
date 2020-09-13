import React from "react";
import ShowMembers from "./ShowMembers";

const ShowAllocation = ({ allocations, auth }) => {
  let allocation =
    allocations &&
    allocations.find(
      (allocation) =>
        allocation.members &&
        allocation.members.some((member) => member.id === auth.uid)
    );

  return (
    <div className= "show-allocation">
      {allocation ? <div>
      <h4>{allocation && allocation.allocationName}</h4>
      <h5>{allocation && allocation.members?.length + " Members"}</h5>
      <div>
        {allocation &&
          allocation.members?.map((member) => (
            <ShowMembers member={member} key={member.id} />
          ))}
      </div>
      </div> : <p style = {{textAlign: "center"}}>Not allocated yet...</p>}
    </div>
  );
};

export default ShowAllocation;
