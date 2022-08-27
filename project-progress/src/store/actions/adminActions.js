export const addAdminRole = (userEmail) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

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
          .doc(userDoc.id)
          .set(
            {
              ...user,
              role: "supervisor",
              admin: true,
              superAdmin: false,
            },
            { merge: true }
          )
          .then(() => {
            dispatch({ type: "ADD_ADMIN_SUCESS" });
            dispatch({
              type: "SUPERVISOR_ROLE",
              user,
            });
          })
          .catch((err) => {
            dispatch({ type: "ADD_ADMIN_ERROR", err });
            dispatch({
              type: "SUPERVISOR_ROLE_ERROR",
              err,
            });
          });
      })
      .catch((err) => {
        alert("An error occurred.");
        console.log(err);
      });
  };
};

export const addSuperAdminRole = (adminEmail) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection("users")
      .get()
      .then((querySnapshot) => {
        const userDoc = querySnapshot?.docs.find(
          (doc) => doc.data().email === adminEmail
        );

        const user = userDoc.data();

        firestore
          .collection("users")
          .doc(userDoc.id)
          .set(
            {
              ...user,
              role: "coordinator",
              admin: false,
              superAdmin: true,
            },
            { merge: true }
          )
          .then(() => {
            dispatch({ type: "ADD_SUPER_ADMIN_SUCESS" });
            dispatch({
              type: "COORDINATOR_ROLE",
              user,
            });
          })
          .catch((err) => {
            dispatch({ type: "ADD_SUPER_ADMIN_ERROR" });
            dispatch({
              type: "COORDINATOR_ROLE_ERROR",
              err,
            });
          });
      })
      .catch((err) => {
        alert("An error occurred. Try again with a valid user email");
        console.log(err);
      });
  };
};
