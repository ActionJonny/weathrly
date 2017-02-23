import React, { Component } from 'react';
import Weather from './Weather';
import $ from 'jquery';
import dataCleaner from '../helpers/dataCleaner'

export default class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationInputField: '',
      locationResults: {},
    };
  }

  componentDidMount() {
    // if there is a city in localStorage
    // make the call
    // clean the data
    // set state
  }

  handleClickEvent() {
    // save city into local
    $.get(this.props.source + this.state.locationInputField + '.json').then(data => {
      // let cleanData = dataCleaner(data);
      this.state.locationResults = dataCleaner(data);
      // this.state.locationResults.push(cleanData)
      this.setState({ locationResults: this.state.locationResults })
      console.log(this.state.locationResults);
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
