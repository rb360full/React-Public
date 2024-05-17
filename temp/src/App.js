import "./App.css";
import React, { Component } from "react";
import { Bs2SquareFill } from "react-icons/bs";
import User from "./Components/User/User";
import Counter from "./Components/Counter/Counter";
import Navbar from "./Components/Navbar/Navbar";
import Form from "./Components/Form/Form";
import FormRegister from "./Components/FormRegister/FormRegister";
import Quiz from "./Components/Quiz/Quiz";
import TicketBuy from "./Components/TicketBuy/TicketBuy";

export default class App extends Component {
  state = {
    users: [
      { id: 1, name: "Reza", age: 41, email: "reza@gmail.com" },
      { id: 2, name: "Ali", age: 43, email: "ali@gmail.com" },
      { id: 3, name: "hasan", age: 36, email: "hasan@gmail.com" },
    ],

    counter: { start: 7, end: 15 },
  };
  removeHandler = (id) => {
    this.setState({
      users: this.state.users.filter((user) => user.id !== id),
    });
  };

  EditHandler(id) {
    console.log("Editing user with ID:", id);
    this.setState({
      users: this.state.users.filter(user => user.id !== id)
    })

  }

  render() {
    return (
      <div className="App">
        {/* <Navbar></Navbar> */}
        {/* {this.state.users.map((item, index) => (<User {...item}></User>))} */}
        {/* <Form name="Ali"></Form> */}
        {/* <Counter {...this.state.counter}></Counter> */}
        {/* <FormRegister></FormRegister> */}
        {/* <Quiz></Quiz> */}
        {/* <TicketBuy></TicketBuy> */}

        {this.state.users.map((user) => (
          <User key={user.id} {...user} onRemove={this.removeHandler.bind(this, user.id)}
            onEdit={this.EditHandler.bind(this, user.id)} > <Bs2SquareFill /></User>
        ))}
      </div>
    );
  }
}

  