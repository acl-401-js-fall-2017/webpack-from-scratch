import React, { Component } from 'react';

export default class App extends Component {
  state = {
    name: 'World'
  }
  render() {
    return (
      <div> Hello {this.state.name}</div>
    )
  }
}