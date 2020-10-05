import { toast } from "react-toastify";

const initState = {};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_PROJECT":
      toast.success("A project was added...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return state;
    case "ADD_PROJECT_ERROR":
      toast.error("A project add error occured...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return state;
    case "REMOVE_PROJECT":
      toast.warn("A project was removed...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return state;
    case "REMOVE_PROJECT_ERROR":
      toast.error("A project remove error occured...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return state;
    case "TOGGLE_PROJECT_STATUS":
      toast.info("A project status changed...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return state;
    case "TOGGLE_PROJECT_STATUS_ERROR":
      toast.error("A project status error occured...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    case "TOGGLE_PROJECT_A_STATUS":
      toast.info("Project A status changed...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return state;
    case "TOGGLE_PROJECT_A_STATUS_ERROR":
      toast.error("Project A status change error occured...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return state;
    default:
      return state;
  }
};

export default projectReducer;
