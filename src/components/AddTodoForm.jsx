import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";

export default class AddTodoForm extends Component{

      state = {
          newItem: "",
        };
      ref = React.createRef();

      handleChange = (event) => {
        const newItem = event.target.value;
        this.setState({ newItem });
      };
    
      handleAddTodoClick = (event) => {
        event.preventDefault();
    
        const { newItem } = this.state;
        const { addTodo } = this.props;
    
        if (!newItem || !newItem.trim()) {
          return;
        }
    
        addTodo(newItem);
    
        this.setState({ newItem: "" });
    
        if (this.ref.current) {
          this.ref.current.focus();
        }
      };

      render() {
        const { newItem } = this.state;

        return (<Form>
            <InputGroup size="lg">
              <FormControl
                placeholder="Add todo"
                onChange={this.handleChange}
                value={newItem}
                autoFocus
                ref={this.ref}
              />
              <Button
                  variant="outline-secondary"
                  onClick={this.handleAddTodoClick}
                  type="submit"
                >
                  Add
                </Button>
            </InputGroup>
        </Form>);

      }
}

AddTodoForm.propTypes = {
  addTodo: PropTypes.func,
};