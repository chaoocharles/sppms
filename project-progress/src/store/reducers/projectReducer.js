import { toast } from "react-toastify";

const initState = {};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_PROJECT":
      toast.success("A project was added...");
      return state;
    case "ADD_PROJECT_ERROR":
      toast.error("A project add error occured...");
      return state;
    case "REMOVE_PROJECT":
      toast.warn("A project was removed...");
      return state;
    case "REMOVE_PROJECT_ERROR":
      toast.error("A project remove error occured...");
      return state;
    case "TOGGLE_PROJECT_STATUS":
      toast.info("A project status changed...");
      return state;
    case "TOGGLE_PROJECT_STATUS_ERROR":
      toast.error("A project status error occured...");
      return state;
    default:
      return state;
  }
};

export default projectReducer;
