'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var TodoApp = React.createClass({

  render: function(){
      return (
        <div>
          <TodoList />
          <AppControls />
        </div>
      );
  }
});

var AppControls = React.createClass({
  render: function() {
    return (
      <div>
      <h2>AppControls component</h2>
      <TodoCount />
      </div>
    );
  }
});

var TodoList = React.createClass({
  render: function() {
    return (
      <h2>His from the TodoList component</h2>
    );
  }
});

var TodoCount = React.createClass({
  render: function(){
    return (
      <span className="todo-count"><strong>0</strong> item left</span>
    );
  }
});

ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
);
