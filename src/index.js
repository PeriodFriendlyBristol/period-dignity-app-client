import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter,Route } from 'react-router-dom';
import About from './components/about/about'
import Landing from './components/landing-page/landing';
import Results from './containers/results';

ReactDOM.render(
  <BrowserRouter>
    <App />
    <Route path="/" component={Landing} />
    <Route path="/venues" component={Results} />
    <Route path="/about" component={About} />
  </BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
