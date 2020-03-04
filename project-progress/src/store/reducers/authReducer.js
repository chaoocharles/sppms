const initState = {
    authError: null
}

const authReducer = (state = initState, action) =>{
    switch(action.type){
        case 'LOGIN_ERROR':
            return{
                ...state,
                authError: "Login Failed"
            }
        case 'LOGIN_SUCCESS':
            return{
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signout success')
            return state
        default:
            return state

    }
}

export default authReducer;