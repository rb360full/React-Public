import React, { Component } from 'react'
import './TodoListApp.css'
import Header from '../Header/Header'
import { FaPlusSquare } from "react-icons/fa";

export default class TodoListApp extends Component {
  constructor(props) {
    
  }
  render() {
    return (
      <div className='TodoListApp'>
        <Header></Header>
        <div className='todo-header'>
          <div className='new-todo-container'>
            <input className='todo-new' type='text' placeholder='Add a new todo' />
            <span className='plus-icon'><FaPlusSquare /></span>
          </div>
          
        </div>
      </div>
    )
  }
}
