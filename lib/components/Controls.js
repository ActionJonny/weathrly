import React, { Component } from 'react';
import Weather from './Weather';
import $ from 'jquery';

export default class Controls extends Component {
  constructor() {
    super();
    this.state = {
      locationInputField: '',
      locationResults: []
    };
  }

  handleClickEvent() {
    // let locationURL = { locationInputField: this.props.source + this.state.locationInputField + '.json' }
    // this.state.locationResults.push(locationURL)
    $.get(this.props.source + this.state.locationInputField + '.json').then(data => {
      console.log(data.forecast.simpleforecast.forecastday);
    })
    // this.setState({ locationInputField: '', locationResults: this.state.locationResults })
    // console.log(this.state.locationResults);
  }

  render() {
    return (
      <div>
        <input type='text' value={this.state.locationInputField}
                           onChange={(e) => this.setState({ locationInputField: e.target.value })}/>
        <input type='submit' onClick={() => this.handleClickEvent()}/>
      </div>
    );
  }
}
