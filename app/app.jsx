var React = require('react');
var ReactDOM = require('react-dom');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');

var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New State ', store.getState());
});

store.dispatch(actions.addTodo('clean the yard'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.toggleShowCompleted());

// Load foundation
$(document).foundation();

//app css
require('style!css!sass!applicationsStyles');

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
