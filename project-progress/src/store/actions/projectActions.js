export const createProject = (project) =>{
    return (dispatch, getState) => {
        // make asynch call
        dispatch({
            type: 'ADD_PROJECT',
            project
        })
    }
}