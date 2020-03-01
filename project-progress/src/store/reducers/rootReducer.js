import firebaseReducer from 'react-redux-firebase';
import firestoreReducer from 'redux-firestore';
import authReducer from './authReducer';
import projectReducer from './projectReducer';
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
});

export default rootReducer;