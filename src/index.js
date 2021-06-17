import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import Store from './Redux/Store';
import reportWebVitals from './reportWebVitals';
import {Router} from 'react-router-dom';
import history from './History/History';


ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
    <Provider store={Store}>
    <App />
    </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
