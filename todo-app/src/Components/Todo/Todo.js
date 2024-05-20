import React, { Component } from 'react'
import './Todo.css'
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: this.props.text,
      isCompleted: false
    }

  }
  render() {

    return (
      <div className='Todo'>
        <div className='todo-container' >
          <input className='todo-item' type='text' placeholder='' defaultValue={this.state.text} readOnly />
          <div className='icons'>
            <span className='icon check-icon'><FaCheck /></span>
            <span className='icon del-icon'><MdDelete /></span>
          </div>
        </div>
      </div>
    )
  }
}
