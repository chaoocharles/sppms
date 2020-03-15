export const addAdminRole = userEmail => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const functions = getFirebase().functions();
    const addAdmin = functions.httpsCallable("addAdminRole");

    addAdmin({ email: userEmail })
      .then(result => {
        console.log(result);
      })
      .then(() => {
        dispatch({ type: "ADD_ADMIN_SUCESS" });
      })
      .catch(err => {
        dispatch({ type: "ADD_ADMIN_ERROR", err });
      });
  };
};
