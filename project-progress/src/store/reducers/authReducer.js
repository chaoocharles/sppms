import { toast } from "react-toastify";

const initState = {};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      toast.error(action.err.message);
      return state;
    case "LOGIN_SUCCESS":
      toast("Welcome back...");
      return state;
    case "IS_ADMIN":
      return {
        ...state,
        admin: action.idTokenResult.claims.admin,
      };
    case "SIGNOUT_SUCCESS":
      toast("You have logged out...");
      return state;
    case "SIGNUP_SUCCESS":
      toast("Welcome, start by adding a project...");
      return state;
    case "SIGNUP_ERROR":
      toast.error("A signUp error occured...");
      return state;
    default:
      return state;
  }
};

export default authReducer;
