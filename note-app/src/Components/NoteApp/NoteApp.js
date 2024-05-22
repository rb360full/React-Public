import React, { Component } from 'react'
import './NoteApp.css'
import Color from '../Color/Color'
import Note from '../Note/Note';
import { FaPlus } from "react-icons/fa";
import { FaEraser } from "react-icons/fa";

export default class NoteApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            colors: [
                "#fff",
                "#FFD37F",
                "#FFFA81",
                "#D5FA80",
                "#78F87F",
                "#79FBD6",
                "#79FDFE",
                "#7AD6FD",
                "#7B84FC",
                "#D687FC",
                "#FF89FD"
            ],
            notes: [],
            title: '',
            inputColor : 'white'
        }
    }

    changeColor = (color)=> {
        
        this.setState({
            inputColor : color
        })
    }


    render() {
        return (
            <div className="NoteApp">
                <h1 className="header">Welcome to Note App</h1>
                <form action="">
                    <input type="text" value={this.state.title} onChange={(event) => this.setState({ title: event.target.value })}
                     style={{backgroundColor:this.state.inputColor}}/>
                </form>
                <div className="color-box">
                    {this.state.colors.map((color) => {
                        return <Color key={color} color={color} onColor={()=> this.changeColor(color)} />;
                    })}
                </div>
                <div className='btn-container'>
                    <button className='plus-btn'><FaPlus /></button>
                    <button className='remove-btn'><FaEraser /></button>
                </div>

                <div className='note-list'>
                    <Note></Note>
                </div>
            </div>
        );
    }
}
