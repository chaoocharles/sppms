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

        default:
            return state;
    }
}

export default milestoneReducer;