import { ListGroup } from "react-bootstrap";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

export default function TodoList({ toggleTodo, removeTodo, todos }) {
  return (
    <ListGroup>
      {todos.map((todo) => {
        return (
          <TodoItem
            todo={todo}
            key={todo.id}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
          />
        );
      })}
    </ListGroup>
  );
}

TodoList.propTypes = {
  items: PropTypes.array,
  removeTodo: PropTypes.func,
  toggleTodo: PropTypes.func,
};
