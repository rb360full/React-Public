import React, { Component } from "react";
import "./TodoListApp.css";
import Header from "../Header/Header.js";
import Todo from "../Todo/Todo.js";
import { FaPlusSquare } from "react-icons/fa";
import { TbTriangleInvertedFilled } from "react-icons/tb";

export default class TodoListApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: {
        id: 0,
        text: "",
        isCompleted: false,
      },
      todoList: [],
      status: "All",
    };
  }

  submitHandler = (event) => {
    event.preventDefault();
    const val = this.state.newTodo.text;
    const maxId = this.state.todoList.reduce(
      (maxId, todo) => Math.max(maxId, todo.id),
      0
    );
    const newTodoItem = {
      id: maxId + 1,
      text: val,
      isCompleted: false,
      status: "Uncompleted",
    };
    newTodoItem.text &&
      this.setState({
        todoList: [...this.state.todoList, newTodoItem],
        newTodo: {
          text: "",
          isCompleted: false,
        },
      });
  };
  todoTextHandler = (event) => {
    const val = event.target.value;
    this.setState({
      newTodo: {
        text: val,
        isCompleted: false,
        status: "All",
      },
    });
  };

  filterHandler = (event) => {
    const status = event.target.value;
    this.setState({
      status: status,
    });
  };

  checkHandler = (id) => {
    const itemFind = this.state.todoList.find((item) => item.id === id);
    const newTodoList = [...this.state.todoList].map(item => {
      if (item.id === id) {
        item.isCompleted = !item.isCompleted
      }
      return item
    })
    this.setState({
      todoList: newTodoList
    })


    console.log(this.state.todoList);
  };



  removeHandler = (id) => {
    this.setState({
      todoList: this.state.todoList.filter(item => item.id !== id)
    })
  }

  render() {
    return (
      <div className="TodoListApp">
        <Header></Header>
        <form action="" onSubmit={(event) => this.submitHandler(event)}>
          <div className="todo-header">
            <div className="new-todo-container">
              <input
                className="todo-new"
                type="text"
                onChange={this.todoTextHandler}
                placeholder="Add a new todo"
                value={this.state.newTodo.text}
              />
              <span className="plus-icon">
                <button type="submit">
                  <FaPlusSquare />
                </button>
              </span>
            </div>
            <div className="filter-container">
              <select
                name=""
                id=""
                onChange={(event) => this.filterHandler(event)}
              >
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="Uncompleted">Uncompleted</option>
              </select>
              <span>
                <TbTriangleInvertedFilled />
              </span>
            </div>
          </div>
        </form>
        <div className="todo-list">
          {this.state.todoList.length > 0 &&
            this.state.status == "Completed" &&
            this.state.todoList
              .filter((item) => item.isCompleted === true)
              .map((todo) => <Todo key={todo.id} {...todo} ></Todo>)}

          {this.state.todoList.length > 0 &&
            this.state.status == "Uncompleted" &&
            this.state.todoList
              .filter((item) => item.isCompleted === false)
              .map((todo) => <Todo key={todo.id} {...todo}></Todo>)}
          {this.state.todoList.length > 0 &&
            this.state.status == "All" &&
            this.state.todoList.map((todo) => (
              <Todo key={todo.id} {...todo} onCheck={() => this.checkHandler(todo.id)} onRemove={() => this.removeHandler(todo.id)}></Todo>
            ))}
        </div>
      </div>
    );
  }
}
