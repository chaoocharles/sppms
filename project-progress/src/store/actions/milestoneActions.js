export const createMilestone = (milestone, projectId) =>{
    return (dispatch, getState, {getFirebase, getFirestore} ) => {
        // make asynch call
        const firestore = getFirestore();

        firestore.collection('projects').doc(projectId).collection('milestones').add({
        ...milestone,
        createdAt: new Date()
        }).then(() => {
            dispatch({
                type: 'ADD_MILESTONE',
                milestone
            })
        }).catch((err) => {
            dispatch({
                type: 'ADD_MILESTONE_ERROR',
                err
            })
        })
 
    }
}
