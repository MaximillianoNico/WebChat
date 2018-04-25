import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import thunk from 'redux-thunk';
import {createStore,applyMiddleware} from "redux";
import reducer from './reducers';
import firebase from 'firebase';
import config from './firebase/firebaseConfig';
import {Provider} from 'react-redux';
import actions from './component/src/action';

const store = createStore(reducer, applyMiddleware(thunk));

firebase.initializeApp(config);
window.firebase=firebase;

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        store.dispatch(actions.setUser(user));
        store.dispatch(actions.setUID(user.uid));
    }else{
        store.dispatch(actions.setUser(null));
    }
})

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
