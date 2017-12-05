import React, { Component } from 'react';
import Greeting from './Greeting';
import './App.scss';
import GreetingForm from './GreetingForm';

export default class App extends Component {

  state = {
    salutation: 'Hello',
    name: 'World'
  }

  handleChange = ({ target }) => this.setState({ [target.name]: target.value });

  render() {
    const { salutation, name } = this.state;

    return (
      <main>
        <h1>Greeting App</h1>
        <Greeting salutation={salutation} name={name}/>
        <GreetingForm salutation = {salutation} name = {name} onChange ={ this.handleChange}/>
      </main>
    )
  }
}
