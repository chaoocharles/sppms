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

            const user = userDoc.data();

            firestore
              .collection("users")
              .doc(user.id)
              .set(
                {
                  ...user,
                  role: "supervisor",
                },
                { merge: true }
              )
              .then(() => {
                dispatch({
                  type: "USER_ROLE_UPDATE",
                  user,
                });
              })
              .catch((err) => {
                dispatch({
                  type: "USER_ROLE_UPDATE_ERROR",
                  err,
                });
              });
          })
          .catch((err) => {
            alert("An error occurred. Try again with a valid user");
            console.log(err);
          });
      })
      .catch((err) => {
        alert("An error occurred");
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
