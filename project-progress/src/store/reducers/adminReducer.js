const initState = {
  addAdminError: null
};

const adminReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_ADMIN_SUCESS":
      return {
        ...state,
        addAdminMessage: action.result.data.message
      };
    case "ADD_ADMIN_ERROR":
      return {
        ...state,
        addAdminError: action.err.message
      };
    default:
      return state;
  }
};

export default adminReducer;
