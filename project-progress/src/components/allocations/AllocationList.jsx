import React from "react";
import AllocationSummary from "./AllocationSummary";

const AllocationList = ({ allocations }) => {
  return (
    <div>
      {allocations &&
        allocations.map(allocation => {
          return (
            <AllocationSummary allocation={allocation} key={allocation.id} />
          );
        })}
    </div>
  );
};

export default AllocationList;
