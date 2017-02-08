var React = require('react');
var ReactDOM = require('react-dom');
var { Provider } = require('react-redux');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');

import TodoApp from 'TodoApp';
var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');
import Login from 'Login';

store.dispatch(actions.startAddTodos());

// Load foundation
$(document).foundation();

//app css
require('style!css!sass!applicationsStyles');

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Router history={hashHistory}>
        <Route path="/">
          <Route path="todos" component={TodoApp}/>
          <IndexRoute component={Login}/>
        </Route>
      </Router>
    </Router>
  </Provider>,
  document.getElementById('app')
);
