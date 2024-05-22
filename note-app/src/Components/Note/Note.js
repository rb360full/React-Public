import React, { Component } from 'react'
import './Note.css'

export default class Note extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div className='Note'>
        <div className='note-item' style={{ backgroundColor: this.props.color }} onClick={() => this.props.onRemove(this.props)}>
          <h3 className='note-text'>{this.props.text}</h3>
        </div>
      </div>
    )
  }
}
