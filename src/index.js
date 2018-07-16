import React from 'react';
import ReactDOM from 'react-dom';
import '../src/styles/css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from '../src/reducers';

const store = createStore(rootReducer);
//console.log('store.getState()', store.getState());


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

registerServiceWorker();

/***  Place In index.js file
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from '../src/reducers';
import { ACTION FILE} from '../src/actions';

const store = createStore(rootReducer);
console.log('store.getState()', store.getState());
store.subscribe(() => console.log('store', store.getState()));
// store.subsceribe must come before store.dispatch (Why??)
store.dispatch(addCharacterById(5));

ReactDOM.render(
    <Provider store={store}>
         < App />
    </Provider>
, document.getElementById('root'));
registerServiceWorker();

**/