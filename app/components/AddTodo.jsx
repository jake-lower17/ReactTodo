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
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <input type="text" ref="todoText" placeholder="What do you need to do?"/>
          </div>
          <div>
            <button  className="button expanded">Add</button>
          </div>
        </form>
      </div>
    );
  },
});

module.exports = AddTodo;
