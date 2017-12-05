import React, { Component } from 'react';
import './App.scss';
import Greeting from './Greeting';
import GreetingForm from './GreetingForm';

export default class App extends Component {
   
    state = { 
        name: "World",
        salutation: "Hello"
    }

    handleChange = ({ target }) => this.setState({ [target.name]: target.value });
    
 
    render() {
        const { salutation, name} = this.state;
        return (
            <main>
             <h1>Greeting App</h1>
             <Greeting name={name} salutation={salutation}/>
             <GreetingForm salutation={salutation} name={name} onChange={this.handleChange}/>
            </main>
        );
    }
}
