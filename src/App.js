import React, { Component } from 'react';
import './App.css';
export default class App extends Component{
    state = {
        salutation: "Hello", 
        name: "Shane"
    }

    handleChange = ({ target }) => this.setState({ [target.name]: target.value });
    render(){
        return (
            <main>
            <div className="greeting">{this.state.salutation} {this.state.name}</div>
            <div>
                <input name="salutation" value={this.state.salutation} onChange={this.handleChange}/>
                <input name="name" value={this.state.name} onChange={this.handleChange}/>
            </div>
            </main>
        );
    }
}