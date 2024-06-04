import React, { Component, PureComponent } from 'react'
import './Todo.css'
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default class Todo extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {}

  }

  checkHandler = (id) => {

    this.props.onCheck(id)
  }

  removeHandler = (id) => {
    this.props.onRemove(id)
  }
  getSnapshotBeforeUpdate(props,state){
    console.log('GetSnapShot',props,state);
    return null
  }
  componentDidUpdate(props){
    console.log('updated' , props);
  }
  
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.props.isCompleted === nextProps.isCompleted) {
  //     return false
  //   }
  //   console.log('Todo Should update');
  //   return true
  // }

  render() {

    return (
      <div className={`Todo ${this.props.isCompleted ? 'completed' : 'uncompleted'}`}>

        <div className='todo-container' >
          <div className='todo-item' >{this.props.text}</div>
          <div className='icons'>
            <span className='icon check-icon' onClick={() => this.checkHandler(this.props.id)} ><FaCheck /></span>
            <span className='icon del-icon' onClick={() => this.removeHandler(this.props.id)}><MdDelete /></span>
          </div>
        </div>
      </div>
    )
  }
}
