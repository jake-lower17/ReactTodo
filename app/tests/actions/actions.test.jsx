var expect = require('expect');
var actions = require('actions');

describe('actions', () => {
  it('should generate search text actions', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text',
    };

    var res = actions.setSearchText(action.searchText);
    expect(res).toEqual(action);
  });

  it('should generate add todo', () => {
    var action = {
      type: 'ADD_TODO',
      todo: {
        id: 'abc123',
        text: 'something to do',
        completed: false,
        createdAt: 12930,
      },
    };

    var res = actions.addTodo(action.todo);
    expect(res).toEqual(action);
  });

  it('should generate add todos action object', () => {
    var todos = [{
      id: '11',
      text: 'anything',
      completed: false,
      completedAt: undefined,
      createdAt: 3000,
    }];

    var action = {
      type: 'ADD_TODOS',
      todos: todos,
    };

    var res = actions.addTodos(todos);
    expect(res).toEqual(action);
  });

  it('should toggle show completed', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED',
    };

    var res = actions.toggleShowCompleted();
    expect(res).toEqual(action);
  });

  it('should toggle todo', () => {
    var action = {
      type: 'TOGGLE_TODO',
      id: '1',
    };

    var res = actions.toggleTodo(action.id);
    expect(res).toEqual(action);
  });
});
