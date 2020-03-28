export const addAdminRole = userEmail => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const functions = getFirebase().functions();
    const addAdmin = functions.httpsCallable("addAdminRole");

    addAdmin({ email: userEmail })
      .then(result => {
        console.log(result);
        dispatch({ type: "ADD_ADMIN_SUCESS", result });
      })
      .catch(err => {
        dispatch({ type: "ADD_ADMIN_ERROR", err });
      });
  };
};

export const addSuperAdminRole = adminEmail => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const functions = getFirebase().functions();
    const addSuperAdmin = functions.httpsCallable("addSuperAdminRole");

    addSuperAdmin({ email: adminEmail })
      .then(result => {
        console.log(result);
        dispatch({ type: "ADD_SUPER_ADMIN_SUCESS", result });
      })
      .catch(err => {
        dispatch({ type: "ADD_SUPER_ADMIN_ERROR", err });
      });
  };
};
