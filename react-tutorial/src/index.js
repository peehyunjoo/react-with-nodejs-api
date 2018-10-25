import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './components/Home';
import Insert from './components/Insert';

ReactDOM.render(
  <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/Home" component={Home}/>
            <Route path="/Insert" component={Insert}/>
          </Switch>
        </div>
      </BrowserRouter>, document.getElementById('root'));

/*
ReactDOM.render(
  <App />, document.getElementById('root'));
*/
