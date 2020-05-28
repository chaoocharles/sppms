import { toast } from "react-toastify";

const initState = {};

const milestoneReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_MILESTONE":
      toast.success("A milestone was added...");
      return state;
    case "ADD_MILESTONE_ERROR":
      toast.error("An error occured when adding a milestone...");
      return {
        ...state,
        addMilestoneError: action.type.message,
      };
    case "REMOVE_MILESTONE":
      toast.warn("A milestone was removed...");
      return state;
    case "REMOVE_MILESTONE_ERROR":
      toast.error("An error occured when removing a milestone...");
      return {
        ...state,
        removeMilestoneError: action.type.message,
      };
    case "TOGGLE_MILESTONE_STATUS":
      toast.info("Milestone status changed...");
      return state;
    case "TOGGLE_MILESTONE_STATUS_ERROR":
      toast.error("An error occured when changing a milestone status...");
      return state;
    case "ADD_REMARK":
      toast.success("A remark was added...");
      return state;
    case "ADD_REMARK_ERROR":
      toast.error("An error occured when adding a remark...");
      return {
        ...state,
        removeRemarkError: action.type.message,
      };
    case "REMOVE_REMARK":
      toast.warn("A remark was removed...");
      return state;
    case "REMOVE_REMARK_ERROR":
      toast.error("An error occured when removing a remark...");
      return {
        ...state,
        removeRemarkError: action.type.message,
      };
    default:
      return state;
  }
};

export default milestoneReducer;
