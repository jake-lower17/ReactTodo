var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
import { configure } from 'configureStore';
import ConnectedTodoList, { TodoList } from 'TodoList';
var { Provider } = require('react-redux');
import ConnectedTodo, { Todo }  from 'Todo';

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });
  it('should render 1 todo for each todo item', () => {
    var todos = [
      {
        id: 1,
        text: 'Do Something',
        completed: false,
        completedAt: undefined,
        createdAt: 500,
      }, {
        id: 2,
        text: 'check mail',
        completed: false,
        completedAt: undefined,
        createdAt: 700,
      }
    ];
    var store = configure({
      todos: todos,
    });
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedTodoList/>
      </Provider>
    );
    var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);
    expect(todosComponents.length).toBe(todos.length);
  });
});
