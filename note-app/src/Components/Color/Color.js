import React, { Component } from 'react'
import './Color.css'

export default class Color extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colors: this.props.colors
    }
  }

  changeColor = (color)=>{

    this.props.onColor(color)

  }
  render() {
    return (
      <div className='Color'>
        <div className='color-circle' style={{ backgroundColor: this.props.color }}
          onClick={() => this.changeColor(this.props.color)}></div>
      </div>
    )
  }
}
