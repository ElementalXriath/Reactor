import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
// need createStore in index because it is highest point of the app
// need applyMiddleware for redux-thunk and logger for developement
import { createStore, applyMiddleware } from "redux";
// Provider will wrap our entire app and provide the store to components
import { Provider } from "react-redux";
import allReducers from "./Reducers";
// import thunk to use in middleware
import ReduxThunk from "redux-thunk";
import logger from 'redux-logger';

const middleware = applyMiddleware(logger, ReduxThunk);


const store = createStore(
  allReducers,
  middleware
)

ReactDOM.render(<Provider store={store}>
                <Router>
                  <App />
                </Router>
                </Provider>,
                 document.getElementById('root'));
