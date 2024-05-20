import React, { Component } from 'react'
import './TodoListApp.css'
import Header from '../Header/Header.js'
import Todo from '../Todo/Todo.js';
import { FaPlusSquare } from "react-icons/fa";
import { TbTriangleInvertedFilled } from "react-icons/tb";

export default class TodoListApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newTodo: {
        id: 0,
        text: '',
        isCompleted: false
      },
      todoList: []

    }
  }

  submitHandler = (event) => {
    event.preventDefault()
    const val = this.state.newTodo.text
    const maxId = this.state.todoList.reduce(
      (maxId, todo) => Math.max(maxId, todo.id),
      0
    );
    const newTodoItem = {
      id: maxId + 1,
      text: val,
      isCompleted: false,
      status: 'All'
    }
    newTodoItem.text && this.setState({
      todoList: [...this.state.todoList, newTodoItem],
      newTodo: {
        text: '',
        isCompleted: false,

      },


    })


  }
  todoTextHandler = (event) => {
    const val = event.target.value
    this.setState({
      newTodo: {
        text: val,
        isCompleted: false,
        status: 'All'
      }
      , status: 'All'
    })
  }

  filterHandler = (event) => {
    const status = event.target.value
    this.setState({
      status: status
    })
    console.log(status);
    // const filteredTodo = this.state.todoList.filter(item => item.status == status)
    // console.log(filteredTodo);
  }


  render() {
    return (
      <div className='TodoListApp'>
        <Header></Header>
        <form action="" onSubmit={(event) => this.submitHandler(event)}>
          <div className='todo-header'>
            <div className='new-todo-container'>
              <input className='todo-new' type='text' onChange={this.todoTextHandler} placeholder='Add a new todo' value={this.state.newTodo.text} />
              <span className='plus-icon'><button type='submit'><FaPlusSquare /></button></span>
            </div>
            <div className='filter-container'>
              <select name="" id="" onChange={(event) => this.filterHandler(event)}>
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="Uncompleted">Uncompleted</option>
              </select>
              <span><TbTriangleInvertedFilled /></span>
            </div>
          </div>
        </form>
        <div className='todo-list'>
         
          {this.state.todoList.length > 0 && this.state.todoList.map((todo) =>
            <Todo key={todo.id} {...todo}></Todo>
          ).filter(item => item.props.status == this.state.status)}

        </div>
      </div>
    )
  }
}
