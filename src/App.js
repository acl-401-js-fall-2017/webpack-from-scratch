import React, { Component } from 'react';
import './App.scss';


export default class App extends Component {

    state = {
        name: 'World'
    }

    handleChange = e => {
        e.preventDefault();
        this.setState({ [e.target.name.name]: e.target.name.value });
    };

    render() {
        console.log(this.state)
        return (
            <main className="greeting">
                <div>Hello {this.state.name}</div>
                <form onSubmit={this.handleChange}>
                    <input type="text" name="name" placeholder="name"/>
                    <input type="submit" placeholder="name"/>
                </form>
            </main>
        );
    }
}