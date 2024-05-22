import React, { Component } from 'react'
import './Note.css'

export default class Note extends Component {
  render() {
    return (
      <div className='Note'>
        <div className='note-item' style={{backgroundColor:'red'}}>
            <h3 className='note-text'>Text</h3>

        </div>
      </div>
    )
  }
}
