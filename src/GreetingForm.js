import React, { Component } from 'react';
import style from './GreetingForm.scss';

export default class GreetingForm extends Component {
  render() {
    const { salutation, name, onChange } = this.props;
    
    return (
      <div className={style.greeting}>
        <div>Salutation: 
          <input name="salutation" value={salutation} onChange={onChange}/>
        </div>
        <div>
          Input: <input name="name" value={name} onChange={onChange}/>
        </div>
      </div>
    );
  }
}