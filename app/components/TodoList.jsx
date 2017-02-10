var React = require('react');
import Todo from 'Todo';
var { connect } = require('react-redux');
var TodoAPI = require('TodoAPI');

export class TodoList extends React.Component {

  render () {
    var { todos, showCompleted, searchText } = this.props;
    var renderTodos = () => {
      if (TodoAPI.filterTodos(todos, showCompleted, searchText).length === 0) {
        return (
          <p className="container__message">Nothing Todo</p>
        );
      }

      return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
        return (
          <Todo key={todo.id} {...todo} />
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
};

export default connect(
  (state) => {
    return state;
  }
)(TodoList);
