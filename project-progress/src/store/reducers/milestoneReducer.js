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
                removeMilestoneError: action.type.message
            }
        case 'TOGGLE_MILESTONE_STATUS':
            return state;
        case 'TOGGLE_MILESTONE_STATUS_ERROR':
            return state
        case 'ADD_REMARK':
            return state;
        case 'ADD_REMARK_ERROR':
            return {
                ...state,
                removeRemarkError: action.type.message
            }
        case 'REMOVE_REMARK':
            return state;
        case 'REMOVE_REMARK_ERROR':
            return {
                ...state,
                removeRemarkError: action.type.message
            }
        default:
            return state;
    }
}

export default milestoneReducer;