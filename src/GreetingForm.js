import React, { Component } from 'react';
import style from './GreetingForm'

export default class GreetingForm extends Component {
  render() {
    const { salutation, name, onChange } = this.props;
    
    return (
      <div>
        <input name="salutation" value={salutation} onChange={onChange}/>
        <input name="name" value={name} onChange={onChange}/>
      </div>
    );
  }
}