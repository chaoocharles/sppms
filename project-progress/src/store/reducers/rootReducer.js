import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import milestoneReducer from "./milestoneReducer";
import adminReducer from "./adminReducer";
import { combineReducers } from "redux";
import allocationReducer from "./allocationReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  milestone: milestoneReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  admin: adminReducer,
  allocation: allocationReducer,
});

export default rootReducer;
