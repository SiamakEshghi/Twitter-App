import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import App from './components/App';
import './stylesheet/main.css';

const sgaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers,
    applyMiddleware(sgaMiddleware)
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
,
document.getElementById('app'));
//sagaMiddleware.run()

