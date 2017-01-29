var React = require('react');

var AddTodo = React.createClass({

  onFormSubmit: function (e) {
    e.preventDefault();

    var todoText = this.refs.todoText.value;

    if (todoText.length > 0) {
      this.props.onAddTodo(todoText);
      this.refs.todoText.value = '';
    }else {
      this.refs.todoText.focus();
    }
  },

  render: function () {
    return (
      <div className="container__footer">
        <form onSubmit={this.onFormSubmit}>
            <input type="text" ref="todoText" placeholder="What do you need to do?"/>
            <button  className="button expanded">Add</button>
        </form>
      </div>
    );
  },
});

module.exports = AddTodo;
