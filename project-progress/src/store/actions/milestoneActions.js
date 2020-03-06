export const createMilestone = (projectId) =>{
    return (dispatch, getState, {getFirebase, getFirestore} ) => {
        // make asynch call
        const firestore = getFirestore();
        const authorId = getState().firebase.auth.uid;

        firestore.collection('projects').add({
           
            project: projectId,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({
                type: 'ADD_MILESTONE',
                
            })
        }).catch((err) => {
            dispatch({
                type: 'ADD_MILESTONE_ERROR',
                err
            })
        })
    }
}

export const addProjectId = (projectId) => {
    return { type: 'ADD_PROJECTID', projectId }
}