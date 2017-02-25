import React, { Component } from 'react';
import Weather from './Weather';
import TenDay from './TenDay'
import $ from 'jquery';
import dataCleaner from '../helpers/dataCleaner'
import sevenHourCleaner from '../helpers/sevenHourCleaner'
import tenDayCleaner from '../helpers/tenDayCleaner'

export default class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationInputField: JSON.parse(localStorage.getItem('recentSearch')) || '',
      locationResults   : {},
      tenDayResults     : {},
    };
  }

  componentDidMount() {
    if(localStorage.length){
      this.handleClickEvent()
    }
  }

  handleClickEvent() {
    $.get(this.props.source + this.state.locationInputField + '.json').then(data => {
      this.state.tenDayResults = tenDayCleaner(data)
      this.state.locationResults = dataCleaner(data);
      this.setState({ locationResults: this.state.locationResults })
      this.setState({ tenDayResults: this.state.tenDayResults })
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
        <TenDay tenDayResults={this.state.tenDayResults}/>
      </div>
    );
  }
}
