import React, { Component } from 'react';
import Weather from './Weather'

export default class Controls extends Component {
  constructor() {
    super();
    this.state = {
      locationInputField: '',
    }
  }

  handleClickEvent() {
    
  }

  render() {
    return (
      <div>
        <input type='text' value={this.state.locationInputField}/>
        <input type='submit' onClick={() => this.handleClickEvent()}/>
      </div>
    );
  }
}
