import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Insert from './components/Insert';
import Delete from './components/Delete';
import Login from './components/Login';

ReactDOM.render(
  <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/Delete" component={Delete}/>
            <Route path="/Insert" component={Insert}/>
            <Route path="/Login" component={Login}/>
          </Switch>
        </div>
      </BrowserRouter>, document.getElementById('root'));

/*
ReactDOM.render(
  <App />, document.getElementById('root'));
*/
