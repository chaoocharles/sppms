import { toast } from "react-toastify";

const initState = {};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      toast.error(action.err.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return state;
    case "LOGIN_SUCCESS":
      toast("Welcome back...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return state;
    case "IS_ADMIN":
      return {
        ...state,
        admin: action.idTokenResult.claims.admin,
      };
    case "SIGNOUT_SUCCESS":
      toast("You have logged out...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return state;
    case "SIGNUP_SUCCESS":
      toast("Welcome, start by adding a project...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return state;
    case "SIGNUP_ERROR":
      toast.error(action.err.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return state;
    default:
      return state;
  }
};

export default authReducer;
