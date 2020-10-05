export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make asynch call
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({
          type: "ADD_PROJECT",
          project,
        });
      })
      .catch((err) => {
        dispatch({
          type: "ADD_PROJECT_ERROR",
          err,
        });
      });
  };
};

export const toggleProjectStatus = (project, projectId) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection("projects")
      .doc(projectId)
      .set(
        {
          ...project,
          status: !project.status,
        },
        { merge: true }
      )
      .then(() => {
        dispatch({
          type: "TOGGLE_PROJECT_STATUS",
          projectId,
        });
      })
      .catch((err) => {
        dispatch({
          type: "TOGGLE_PROJECT_STATUS_ERROR",
          err,
        });
      });
  };
};

export const toggleProjectAStatus = (project, projectId) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection("projects")
      .doc(projectId)
      .set(
        {
          ...project,
          projectA: !project.projectA,
        },
        { merge: true }
      )
      .then(() => {
        dispatch({
          type: "TOGGLE_PROJECT_A_STATUS",
          projectId,
        });
      })
      .catch((err) => {
        dispatch({
          type: "TOGGLE_PROJECT_A_STATUS_ERROR",
          err,
        });
      });
  };
};

export const deleteProject = (projectId) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection("projects")
      .doc(projectId)
      .delete()
      .then(() => {
        dispatch({
          type: "REMOVE_PROJECT",
        });
      })
      .catch((err) => {
        dispatch({
          type: "REMOVE_PROJECT_ERROR",
          err,
        });
      });
  };
};
