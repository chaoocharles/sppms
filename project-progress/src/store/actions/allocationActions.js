export const addAllocation = (allocationName) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make asynch call
    const firestore = getFirestore();
    const authorId = getState().firebase.auth.uid;

    firestore
      .collection("allocations")
      .add({
        ...allocationName,
        authorId: authorId,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({
          type: "ADD_ALLOCATION",
          allocationName,
        });
      })
      .catch((err) => {
        dispatch({
          type: "ADD_ALLOCATION_ERROR",
          err,
        });
      });
  };
};
