var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog',
      };

      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED',
      };

      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        todo: {
          id: 'abc123',
          text: 'something to do',
          completed: false,
          createdAt: 12930,
        },
      };

      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });
    it('should update todo', () => {
      var todos = [
        {
          id: '199',
          text: 'Write test',
          completed: true,
          createdAt: 123,
          completedAt: 150,
        }, {
          id: '201',
          text: 'write todo.test.jsx test',
          completed: false,
          createdAt: 1223,
          completedAt: 15000,
        },
      ];
      var updates = {
        completed: false,
        completedAt: null,
      };
      var action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates: updates,
      };

      var res = reducers.todosReducer(df(todos), df(action));
      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(todos[0].text);
    });

    it('should add existing todos', () => {
      var todos = [
        {
          id: '199',
          text: 'Write test',
          completed: true,
          createdAt: 123,
          completedAt: 150,
        }, {
          id: '201',
          text: 'write todo.test.jsx test',
          completed: false,
          createdAt: 1223,
          completedAt: 15000,
        },
      ];
      var action = {
        type: 'ADD_TODOS',
        todos: todos,
      };

      var res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toEqual(2);
      expect(res[0]).toEqual(todos[0]);
    });

  });
});
