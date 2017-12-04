import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'world'
    };
  }

  // state = {
  //   name: 'World'
  // }

  render() {
    return(
      <main>
        <div className="greeting">Hello {this.state.name}</div>
        <div>
          <input name="name" value={this.state.name} onChange={this.handleChange}/>
        </div>
      </main>
    )
  }
}