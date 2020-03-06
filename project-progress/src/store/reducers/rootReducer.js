import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';
import authReducer from './authReducer';
import projectReducer from './projectReducer';
import milestoneReducer from './milestoneReducer';
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    milestone: milestoneReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;