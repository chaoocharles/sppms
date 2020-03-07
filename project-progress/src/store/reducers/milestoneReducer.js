const initState = {}

const milestoneReducer = (state = initState, action) =>{
    switch(action.type){
        case 'ADD_MILESTONE':
            return state
        case 'ADD_MILESTONE_ERROR':
            return {
                ...state,
                addMilestoneError: action.type.message
            }
        case 'REMOVE_MILESTONE':
        return state;
        case 'REMOVE_MILESTONE_ERROR':
            return {
                ...state,
                removeError: action.type.message
            }
        default:
            return state;
    }
}

export default milestoneReducer;