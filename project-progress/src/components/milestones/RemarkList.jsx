import React from "react";
import RemarkDetails from "./RemarkDetails";

const RemarkList = ({ remarks, milestoneId, admin, superAdmin, auth }) => {
  return (
    <React.Fragment>
      {remarks &&
        remarks.map(remark => {
          return (
            <RemarkDetails
              remark={remark}
              milestoneId={milestoneId}
              admin={admin}
              superAdmin={superAdmin}
              auth={auth}
              key={remark.id}
            />
          );
        })}
    </React.Fragment>
  );
};

export default RemarkList;
