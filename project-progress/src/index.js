import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './store/reducers/rootReducer';
import {Provider} from 'react-redux';
import {ReactReduxFirebaseProvider, getFirebase} from 'react-redux-firebase';
import {createFirestoreInstance, getFirestore, reduxFirestore} from 'redux-firestore';
import thunk from 'redux-thunk';
import firebase from 'firebase/app';
import fbConfig from './config/fbConfig';

import { useSelector } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';


const rrfConfig = {
    useFirestoreForProfile: true,
    userProfile: 'users', 
    attachAuthIsReady: true
}

  const store = createStore(rootReducer, 
    compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(fbConfig)
    )
    );

    const rrfProps = {
        firebase,
        config: rrfConfig,
        dispatch: store.dispatch,
        createFirestoreInstance
    }

    function AuthIsLoaded({ children }) {
        const auth = useSelector(state => state.firebase.auth)
        if (!isLoaded(auth)) return <div className='container center'>Loading...</div>;
        return children
      }

ReactDOM.render(<Provider store = {store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <AuthIsLoaded>
                <App />
            </AuthIsLoaded>
        </ReactReduxFirebaseProvider>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
