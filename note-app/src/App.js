import React, { Component } from 'react'
import './App.css'
import NoteApp from './Components/NoteApp/NoteApp'

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <NoteApp />
      </div>
    )
  }
}
