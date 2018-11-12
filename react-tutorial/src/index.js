import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Insert from './components/Insert';
import Delete from './components/Delete';
import Login from './components/Login';
import Register from './components/Register';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
const store = createStore(reducers,applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/Delete" component={Delete}/>
            <Route path="/Insert" component={Insert}/>
            <Route path="/Login" component={Login}/>
            <Route path="/Register" component={Register}/>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>, document.getElementById('root'));

/*
ReactDOM.render(
  <App />, document.getElementById('root'));
*/
