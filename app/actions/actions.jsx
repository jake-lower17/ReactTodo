import firebase, { firebaseRef, githubProvider } from 'app/firebase/';
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
    var uid = getState().auth.uid;
    var todoRef = firebaseRef.child(`users/${uid}/todos`).push(todo);

    return todoRef.then(() => {
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

export var startAddTodos = () => {
  return (dispatch, getState) => {
    var uid = getState().auth.uid;
    var todosRef = firebaseRef.child(`users/${uid}/todos`);
    return todosRef.once('value').then((snapshot) => {
      var todos = snapshot.val() || {};
      var parsedTodos = [];

      Object.keys(todos).forEach((todoID) => {
        parsedTodos.push({
          id: todoID,
          ...todos[todoID],
        });
      });

      dispatch(addTodos(parsedTodos));
      console.log('got database ', todos);
    }, (e) => {
      console.log('unable to fetch data', e);
    });
  };
};

export var updateTodo = (id, updates) => {
  return {
    type: 'UPDATE_TODO',
    id: id,
    updates: updates,
  };
};

export var startToggleTodo = (id, completed) => {
  return (dispatch, getState) => {
    var uid = getState().auth.uid;
    var todoRef = firebaseRef.child(`users/${uid}/todos/${id}`);
    var updates = {
      completed: completed,
      completedAt: completed ? moment().unix() : null,
    };

    return todoRef.update(updates).then(() => {
      dispatch(updateTodo(id, updates));
    });
  };
};

export var startLogin = () => {
  return (dispatch, getState) => {
    return firebase.auth().signInWithPopup(githubProvider).then((result) => {
      console.log('Auth Worked', result);
    }, (error) => {
      console.log('Unable to auth', error);
    });
  };
};

export var startLogout = () => {
  return (dispatch, getState) => {
    return firebase.auth().signOut().then(() => {
      console.log('Logged Out!');
    });
  };
};

export var login = (uid) => {
  return {
    type: 'LOGIN',
    uid: uid,
  };
};

export var logout = () => {
  return {
    type: 'LOGOUT',
  };
};
