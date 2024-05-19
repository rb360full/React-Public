import React, { Component } from 'react'
import './TodoListApp.css'
import Header from '../Header/Header.js'
import Todo from '../Todo/Todo.js';
import { FaPlusSquare } from "react-icons/fa";
import { TbTriangleInvertedFilled } from "react-icons/tb";

export default class TodoListApp extends Component {

  render() {
    return (
      <div className='TodoListApp'>
        <Header></Header>
        <div className='todo-header'>
          <div className='new-todo-container'>
            <input className='todo-new' type='text' placeholder='Add a new todo' />
            <span className='plus-icon'><FaPlusSquare /></span>
          </div>
          <div className='filter-container'>
            <select name="" id="">
              <option value="All">All</option>
              <option value="Completed">Completed</option>
              <option value="Uncompleted">Uncompleted</option>
            </select>
            <span><TbTriangleInvertedFilled /></span>
          </div>
        </div>
        <Todo></Todo>
      </div>
    )
  }
}
