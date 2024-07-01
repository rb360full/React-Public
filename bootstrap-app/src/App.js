import React, { Component, startTransition } from 'react'
import './App.css'
import { Container, Col, Row, Button, Form, Navbar, Nav, InputGroup } from 'react-bootstrap';
import GoogleApi from './Components/GoogleApi/GoogleApi';



export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.name,
      family: props.family,
      text: ''
    }
    console.log('Constructor');
  }
  componentDidMount() {
    console.log('app did mount');
  }

  shouldComponentUpdate() {
    console.log('should Component Update');
    return true
  }

  static getDerivedStateFromProps() {
    console.log('getDerivedStateFromProps');
    return ''
  }

  textInputHandler = (value) => {
    this.setState({
      text: value
    })
  }
 
  render() {
    return (
      
      <div className='App'>
        <GoogleApi></GoogleApi>
        <Container className='cont bg-primary'  >

          <Row>
            <Col>
              <Navbar expand="lg" bg="dark" className='text-warning' variant="light">
                Navbar.Brand, Navbar.Toggle, Navbar.Collapse, Navs, inline Forms, etc.
              </Navbar>
            </Col>
          </Row>
          <Row>
            <Col>
              <InputGroup>
                {/* <InputGroup.Text value={'ali'} onChange={event => this.textInputHandler(event.target.value)}>{this.state.text}</InputGroup.Text> */}
                <Form.Control type="text" value={this.state.text} onChange={event => this.textInputHandler(event.target.value)} placeholder="Placeholder text" />

              </InputGroup>
            </Col>
          </Row>
        </Container >
      </div>
    )
  }
}
