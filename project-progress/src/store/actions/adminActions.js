export const addAdminRole = (userEmail) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const functions = getFirebase().functions();
    const addAdmin = functions.httpsCallable("addAdminRole");
    const firestore = getFirestore();

    addAdmin({ email: userEmail })
      .then((result) => {
        dispatch({ type: "ADD_ADMIN_SUCESS", result });
      })
      .catch((err) => {
        dispatch({ type: "ADD_ADMIN_ERROR", err });
      })
      .then(() => {
        firestore
          .collection("users")
          .get()
          .then((querySnapshot) => {
            const userDoc = querySnapshot?.docs.find(
              (doc) => doc.data().email === userEmail
            );
            console.log(userDoc.id);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const addSuperAdminRole = (adminEmail) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const functions = getFirebase().functions();
    const addSuperAdmin = functions.httpsCallable("addSuperAdminRole");

    addSuperAdmin({ email: adminEmail })
      .then((result) => {
        dispatch({ type: "ADD_SUPER_ADMIN_SUCESS", result });
      })
      .catch((err) => {
        dispatch({ type: "ADD_SUPER_ADMIN_ERROR", err });
      });
  };
};

export const addRoleStateToStore = (role) => {
  return {
    type: "ADD_ROLE_TO_STATE",
    role,
  };
};
