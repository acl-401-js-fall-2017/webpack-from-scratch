import React, { Component } from 'react';

export default class App extends Component {
  // 
  state = {
    name: 'World'
  }
  handleChange = ({ target }) => this.setState({ [target.name]: target.value });

  render() {
    return (
      <main>
      <div>Hello {this.state.name}</div>
      <div>
        <input name="name" value={this.state.name} onChange={this.handleChange}/>
      </div>
      </main>
    )
  }
}
