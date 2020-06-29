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

export const addMember = (user, allocationId, allocation) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection("allocations")
      .doc(allocationId)
      .update({
        ...allocation,
        members: firestore.FieldValue.arrayUnion({
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        }),
      })
      .then(() => {
        dispatch({
          type: "ADD_MEMBER",
          user,
        });
      })
      .catch((err) => {
        dispatch({
          type: "ADD_MEMBER_ERR",
          err,
        });
      });
  };
};

export const removeMember = (member, allocationId, allocation) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection("allocations")
      .doc(allocationId)
      .update({
        ...allocation,
        members: firestore.FieldValue.arrayRemove({
          ...member,
        }),
      })
      .then(() => {
        dispatch({
          type: "REMOVE_MEMBER",
          member,
        });
      })
      .catch((err) => {
        dispatch({
          type: "REMOVE_MEMBER_ERR",
          err,
        });
      });
  };
};


export const toggleAllocated = (user) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
      const firestore = getFirestore();

      firestore.collection('users').doc(user.id).set({
          ...user,
          allocated: !user.allocated
      }, { merge: true }).then(() => {
          dispatch({
              type: 'TOGGLE_ALLOCATED',
              user
          })
      }).catch((err) => {
          dispatch({
              type: 'TOGGLE_ALLOCATED_ERR',
              err
          })
      })

  }
}