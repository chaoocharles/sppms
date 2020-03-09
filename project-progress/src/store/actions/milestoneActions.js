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

export const toggleMilestoneStatus = (milestone) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        const authorId = getState().firebase.auth.uid;

        firestore.collection('projects').doc(milestone.projectId).collection('milestones').doc(milestone.id).set({
            ...milestone,
            authorId: authorId,
            status: !milestone.status
        }, { merge: true }).then(() => {
            dispatch({
                type: 'TOGGLE_MILESTONE_STATUS',
                milestone
            })
        }).catch((err) => {
            dispatch({
                type: 'TOGGLE_MILESTONE_STATUS_ERROR',
                err
            })
        })
 
    }
}

export const deleteMilestone = (milestone) => {

    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();

        firestore.collection('projects').doc(milestone.projectId).collection('milestones').doc(milestone.id).delete().then(() => {
            dispatch({
                type: 'REMOVE_MILESTONE'
            })
        }).catch((err) => {
            dispatch({
                type: 'REMOVE_MILESTONE_ERROR', err
            })
        })
    }
}

export const addRemark = (remark, projectId) =>{
    return (dispatch, getState, {getFirebase, getFirestore} ) => {
        // make asynch call
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;

        firestore.collection('projects').doc(projectId).collection('remarks').add({
        ...remark,
        authorId: authorId,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        createdAt: new Date()
        }).then(() => {
            dispatch({
                type: 'ADD_REMARK',
                remark
            })
        }).catch((err) => {
            dispatch({
                type: 'ADD_REMARK_ERROR',
                err
            })
        })
 
    }
}

export const deleteRemark = (remark) => {

    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();

        firestore.collection('projects').doc(remark.projectId).collection('remarks').doc(remark.id).delete().then(() => {
            dispatch({
                type: 'REMOVE_REMARK'
            })
        }).catch((err) => {
            dispatch({
                type: 'REMOVE_REMARK_ERROR', err
            })
        })
    }
}