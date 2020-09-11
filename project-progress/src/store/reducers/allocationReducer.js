import { toast } from "react-toastify";

const initState = {};

const allocationReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_ALLOCATION":
      toast.success("An allocation was added...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return state;
    case "ADD_ALLOCATION_ERROR":
      toast.success(action.err.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return {
        ...state,
        addAllocationError: action.type.message,
      };
    default:
      return state;
  }
};

export default allocationReducer;
