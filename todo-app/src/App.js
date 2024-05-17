import React, { Component } from 'react'
import './App.css'
import TodoListApp from './Components/TodoListApp/TodoListApp'

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <TodoListApp></TodoListApp>
      </div>
    )
  }
}
