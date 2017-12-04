import React, { Component } from 'react';

export default class App extends Component {
  state = {
    name: 'bob'
  }

  handleChange =({ target }) => this.setState({ [target.name]: target.value });

  render () {
    return (
      <main>
      <div>hhhiiii {this.state.name}</div>
      <input name="name" value={name} onChange={this.handleChange}/>
      </main>
    )
  }

}