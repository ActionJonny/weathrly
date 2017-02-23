import React, { Component } from 'react';
import Weather from './Weather';
import $ from 'jquery';
import dataCleaner from '../helpers/dataCleaner'

export default class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationInputField: JSON.parse(localStorage.getItem('recentSearch')) || '',
      locationResults: {},
    };
  }

  componentDidMount() {
    if(localStorage.length){
      this.handleClickEvent()
    }
  }

  handleClickEvent() {
    // save city into local
    $.get(this.props.source + this.state.locationInputField + '.json').then(data => {
      this.state.locationResults = dataCleaner(data);
      this.setState({ locationResults: this.state.locationResults })
      localStorage.setItem('recentSearch', JSON.stringify(this.state.locationInputField))
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
