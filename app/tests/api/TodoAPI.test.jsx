var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('filterTodos', () => {
    var todos = [{
        id: 23,
        text: 'test all files',
        completed: true,
      }, {
        id: 24,
        text: 'Show Some text',
        completed: false,
      }, {
        id: 25,
        text: 'Show some text',
        completed: true,
      },
    ];
    it('should return all items if showCompleted is true', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toEqual(3);
    });
    it('should return only uncompleted items when showCompleted is false', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, false, '');
      expect(filteredTodos.length).toEqual(1);
    });
    it('should sort by completed status', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos[0].completed).toEqual(false);
    });
    it('should filter todos by searchText', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, 'some');
      expect(filteredTodos.length).toEqual(2);
    });
    it('should return all todos on empty search text', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toEqual(3);
    });
  });
});
