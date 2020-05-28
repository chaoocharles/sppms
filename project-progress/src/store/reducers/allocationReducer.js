import { toast } from "react-toastify";

const initState = {};

const allocationReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_ALLOCATION":
      console.log("hellooooo");
      toast.success("An allocation was added...");
      return state;
    case "ADD_ALLOCATION_ERROR":
      toast.success(action.err.message);
      return {
        ...state,
        addAllocationError: action.type.message,
      };
    default:
      return state;
  }
};

export default allocationReducer;
