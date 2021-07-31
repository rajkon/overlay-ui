import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import App from './App';

// import Contacts from './Contacts';
import Google from './Google';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className="App">
        <Route path="/" exact component={App} />
        {/* <Route path="/Contacts" exact component={Contacts} /> */}
        <Route path="/Google" exact component={Google} />
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
