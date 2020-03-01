const initState = {}

const projectReducer = (state = initState, action) =>{
    switch(action.type){
        case 'ADD_PROJECT':
            console.log ('added a project', action.project);
            return state;
        case 'ADD_PROJECT_ERROR':
            console.log ('An error occured', action.err);
            return state;
        default:
            return state;
    }
}

export default projectReducer;