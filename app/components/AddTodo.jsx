var React = require('react');
var { connect } = require('react-redux');
var actions = require('actions');

export class AddTodo extends React.Component {

  onFormSubmit (e) {
    e.preventDefault();

    var todoText = this.refs.todoText.value;
    var { dispatch } = this.props;
    if (todoText.length > 0) {
      this.refs.todoText.value = '';
      dispatch(actions.startAddTodo(todoText));
    }else {
      this.refs.todoText.focus();
    }
  }

  render () {
    return (
      <div className="container__footer">
        <form onSubmit={this.onFormSubmit.bind(this)}>
            <input type="text" ref="todoText" placeholder="What do you need to do?"/>
            <button  className="button expanded">Add</button>
        </form>
      </div>
    );
  }
};

export default connect()(AddTodo);
