const initState = {}

const projectReducer = (state = initState, action) =>{
    switch(action.type){
        case 'ADD_PROJECTID':
            console.log(action.projectId)
            return{
                ...state,
                projectId:action.projectId
            }
        default:
            return state;
    }
}

export default projectReducer;