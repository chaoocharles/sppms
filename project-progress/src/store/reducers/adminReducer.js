const initState = {
  addSuperAdminError: null
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
    case "ADD_SUPER_ADMIN_SUCESS":
      return {
        ...state,
        addSuperAdminMessage: action.result.data.message
      };
    case "ADD_SUPER_ADMIN_ERROR":
      return {
        ...state,
        addSuperAdminError: action.err.message
      };
    default:
      return state;
  }
};

export default adminReducer;
