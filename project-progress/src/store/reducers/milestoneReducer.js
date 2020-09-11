import { toast } from "react-toastify";

const initState = {};

const milestoneReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_MILESTONE":
      toast.success("A milestone was added...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return state;
    case "ADD_MILESTONE_ERROR":
      toast.error("An error occured when adding a milestone...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return {
        ...state,
        addMilestoneError: action.type.message,
      };
    case "REMOVE_MILESTONE":
      toast.warn("A milestone was removed...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return state;
    case "REMOVE_MILESTONE_ERROR":
      toast.error("An error occured when removing a milestone...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return {
        ...state,
        removeMilestoneError: action.type.message,
      };
    case "TOGGLE_MILESTONE_STATUS":
      toast.info("Milestone status changed...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return state;
    case "TOGGLE_MILESTONE_STATUS_ERROR":
      toast.error("An error occured when changing a milestone status...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return state;
    case "ADD_REMARK":
      toast.success("A remark was added...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return state;
    case "ADD_REMARK_ERROR":
      toast.error("An error occured when adding a remark...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return {
        ...state,
        removeRemarkError: action.type.message,
      };
    case "REMOVE_REMARK":
      toast.warn("A remark was removed...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return state;
    case "REMOVE_REMARK_ERROR":
      toast.error("An error occured when removing a remark...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return {
        ...state,
        removeRemarkError: action.type.message,
      };
    default:
      return state;
  }
};

export default milestoneReducer;
