import React, { Component } from 'react';
import Weather from './Weather';
import $ from 'jquery';

export default class Controls extends Component {
  constructor() {
    super();
    this.state = {
      locationInputField: '',
      locationResults: [],
    };
  }

  handleClickEvent(props) {
    $.get(this.props.source + this.state.locationInputField + '.json').then(data => {
      this.state.locationResults.push(data.hourly_forecast);
      this.setState({ locationResults: this.state.locationResults })
    })
  }

  render() {
    return (
      <div>
        <input type='text' value={this.state.locationInputField}
                           onChange={(e) => this.setState({ locationInputField: e.target.value })}/>
        <input type='submit' onClick={() => this.handleClickEvent()}/>
        <Weather locationResults={this.state.locationResults}/>
      </div>
    );
  }
}
