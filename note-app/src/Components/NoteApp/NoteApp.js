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
            inputColor: 'white'
        }
    }

    changeColor = (color) => {

        this.setState({
            inputColor: color
        })
    }

    addNote = (text) => {
        const maxId = this.state.notes.reduce(
            (maxId, note) => Math.max(maxId, note.id),
            0)
        const newNote = {
            id: maxId + 1,
            text,
            color: this.state.inputColor
        }
        const newNotesArray = [...this.state.notes, newNote]
        console.log(newNotesArray);
        this.state.title && this.setState({
            notes: [...newNotesArray]
        })
        this.state.title = ''
    }
    submitHandler = (event, text) => {
        event.preventDefault()
        this.addNote(text)
    }

    render() {
        return (
            <div className="NoteApp">
                <h1 className="header">Welcome to Note App</h1>
                <form action="" onSubmit={(event) => this.submitHandler(event, this.state.title)}>
                    <input type="text" value={this.state.title} onChange={(event) => this.setState({ title: event.target.value })}
                        style={{ backgroundColor: this.state.inputColor }} />
                </form>
                <div className="color-box">
                    {this.state.colors.map((color) => {
                        return <Color key={color} color={color} onColor={() => this.changeColor(color)} />;
                    })}
                </div>
                <div className='btn-container'>
                    <button className='plus-btn' onClick={() => this.addNote(this.state.title)}><FaPlus /></button>
                    <button className='remove-btn' onClick={() => this.setState({ title: '' })}><FaEraser /></button>
                </div>

                <div className='note-list'>

                    {this.state.notes.map(item => {
                        return <Note key={item.id} {...item} onRemove={() => this.setState({ notes: [...this.state.notes.filter(note => note !== item)] })}></Note>
                    })}

                </div>
            </div>
        );
    }
}
