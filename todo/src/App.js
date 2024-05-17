import React, { Component } from 'react'
import './App.css'
import TodoListApp from "./Components/TodoListApp/TodoListApp";

export default class App extends Component {
  constructor (props){
    super(props);
   this.state = {
    
   }
  }
  render() {
    return (
      <div className='App'>
        <TodoListApp>
           
        </TodoListApp>
      </div>
    )
  }
}
