export const createProject = (project) =>{
    return (dispatch, getState, {getFirebase, getFirestore} ) => {
        // make asynch call
        const firestore = getFirestore();

        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Chaoo',
            authorLastName: 'Charles',
            createdAt: new Date()
        }).then(() => {
            dispatch({
                type: 'ADD_PROJECT',
                project
            })
        }).catch((err) => {
            dispatch({
                type: 'ADD_PROJECT_ERROR',
                err
            })
        })
    }
}