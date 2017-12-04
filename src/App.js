import React, { Component } from 'react';

export default class App extends Component {

    state = {
        name: 'World'
    }

    handleChange = ({ target }) => this.setState({ [target.name]: target.value })

    render() {
        return (
            <div>
                <div>Hello World</div>
                <form onSubmit={this.handleChange}>
                    <input type="text" name="name" placeholder="name"/>
                    <input type="submit" placeholder="name"/>
                </form>
            </div>
        );
    }
}