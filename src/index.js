import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers/index'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
<Provider store={createStoreWithMiddleware(rootReducer)}>
    <App />
</Provider>, 
document.getElementById('root'));
registerServiceWorker('.App');

