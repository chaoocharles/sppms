const initState = {
  addAdminError: null
};

const adminReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_ADMIN_SUCESS":
      console.log(state);
      return state;
    case "ADD_ADMIN_ERROR":
      console.log(state);
      return {
        ...state,
        addAdminError: action.err.message
      };
    default:
      return state;
  }
};

export default adminReducer;
