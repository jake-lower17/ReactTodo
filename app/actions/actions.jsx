import firebase, { firebaseRef } from 'app/firebase/';
import moment from 'moment';

export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText: searchText,
  };
};

export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED',
  };
};

export var addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo: todo,
  };
};

export var startAddTodo = (text) => {
  return (dispatch, getState) => {
    var todo =
      {
        text: text,
        completed: false,
        createdAt: moment().unix(),
        completedAt: null,
      };
    console.log(todo);
    var todoRef = firebaseRef.child('todos').push(todo);

    todoRef.then(() => {
      dispatch(addTodo({
        ...todo,
        id: todoRef.key,
      }));
    });
  };
};

export var addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos: todos,
  };
};

export var toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id: id,
  };
};
