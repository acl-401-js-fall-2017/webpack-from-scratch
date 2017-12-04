import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  state = {
    name: 'bob'
  }

  handleChange =({ target }) => this.setState({ [target.name]: target.value });

  render () {
    return (
      <main>
      <div className="greeting">hh8hiiii {this.state.name}</div>
      <input name="name" value={this.state.name} onChange={this.handleChange}/>
      </main>
    )
  }

}