'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var TodoApp = React.createClass({

  render: function(){
      return (
		<section className="todoapp">
			<header className="header">
				<h1>todos</h1>
				<input className="new-todo" placeholder="What needs to be done?" autofocus />
			</header>
          	<TodoList />
			<AppControls />
        </section>
	);
  }
});

var TodoList = React.createClass({
  render: function() {
    return (
		<section className="main">
			<input className="toggle-all" type="checkbox" />
			<label htmlFor="toggle-all">Mark all as complete</label>
			<ul className="todo-list"></ul>
		</section>
    );
  }
});

var AppControls = React.createClass({
  render: function() {
    return (
		<footer className="footer">
			<TodoCount />
			<ul className="filters"></ul>
			<button className="clear-completed">Clear completed</button>
		</footer>
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
