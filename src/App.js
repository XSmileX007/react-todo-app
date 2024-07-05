import { Component } from "react";
import "./App.css";
import { VISIBILITY_TYPES } from "./constants/toolbarconst";
import { UniqueString } from "unique-string-generator";
import { AddTodoForm, TodoList, VisibilityToolbar } from "./components";

import "bootstrap/dist/css/bootstrap.css";

export default class App extends Component {
  state = {
    todos: JSON.parse(localStorage.getItem("todos")) || [],
    visibility: VISIBILITY_TYPES.ALL,
  };

  componentDidUpdate() {
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  }

  handleVisibilityChange = (visibility) => {
    this.setState({ visibility });
  };

  handleAddTodo = (value) => {
    const { todos } = this.state;
    const newTodo = {
      id: UniqueString(),
      text: value,
      completed: false,
    };

    this.setState({
      todos: [...todos, newTodo],
    });
  };

  getVisibleTodos = () => {
    const { todos, visibility } = this.state;
    if (visibility === VISIBILITY_TYPES.ALL) {
      return todos;
    }

    if (visibility === VISIBILITY_TYPES.COMPLETED) {
      return todos.filter((todo) => todo.completed);
    }

    return todos.filter((todo) => !todo.completed);
  };

  handleToggleTodo = (id) => {
    const { todos } = this.state;
    const todo = todos.find((item) => item.id === id);

    todo.completed = !todo.completed;
    this.setState({ todos });
  };

  handleRemoveTodo = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter((todo) => todo.id !== id);

    this.setState({ todos: newTodos });
  };

  handleRemoveCompleted = () => {
    const { todos } = this.state;
    const newTodos = todos.filter((todo) => !todo.completed);

    this.setState({ todos: newTodos });
  };

  render() {
    const { visibility, todos } = this.state;
    const visibleTodos = this.getVisibleTodos();

    const hasCompletedTodos =
      todos.filter((todo) => !!todo.completed).length > 0;
    return (
      <div className="App">
        <header className="header">Moji taskovi</header>
        <VisibilityToolbar
          visibilityType1={visibility}
          onVisibilityChange1={this.handleVisibilityChange}
        />
        <div className="todoContainer">
          <AddTodoForm addTodo={this.handleAddTodo}></AddTodoForm>

          <TodoList
            todos={visibleTodos}
            removeTodo={this.handleRemoveTodo}
            toggleTodo={this.handleToggleTodo}
          />
        </div>
        {hasCompletedTodos && (
          <span onClick={this.handleRemoveCompleted} className="btn-clear-all">
            Clear completed
          </span>
        )}
      </div>
    );
  }
}
