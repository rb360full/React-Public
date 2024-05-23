import React, { Component } from 'react'
import './App.css'
import { Button } from 'react-bootstrap'
import { Alert } from 'react-bootstrap';
import { Card } from 'react-bootstrap';



export default class App extends Component {


  render() {
    return (
      <div className='App'>

        <Button variant="primary" onClick={() => console.log("Primary")}>
          Primary
        </Button>
        <Alert variant="danger" dismissible onClose={this.handleCloseAlert}>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <Alert.Link>Heading text</Alert.Link>
        </Alert>
        


      </div>
    )
  }
}
