import React, { Component } from 'react';
import Weather from './Weather';
import TenDay from './TenDay'
import SevenHour from './SevenHour'
import $ from 'jquery';
import dataCleaner from '../helpers/dataCleaner'

export default class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationInputField: localStorage.getItem('recentSearch') || '',
      locationResults   : {},
    };
  }

  componentDidMount() {
    if(localStorage.length){
      this.handleClickEvent()
    }
  }

  handleClickEvent() {
    $.get(this.props.source + this.state.locationInputField + '.json').then(data => {
      this.state.locationResults = dataCleaner(data);
      localStorage.setItem('recentSearch', this.state.locationInputField)
      this.setState({ locationInputField: '', locationResults: this.state.locationResults })
    })
  }

  render() {
    return (
      <div>

        <div>
          <input type='text' value={this.state.locationInputField}
                             onChange={(e) => this.setState({ locationInputField: e.target.value })}/>
          <input type='submit' onClick={() => this.handleClickEvent()}/>
          <Weather locationResults={this.state.locationResults}/>
        </div>

        <div>
          <SevenHour sevenHourForecast={this.state.locationResults.sevenHourForecast}/>
        </div>

    </div>


    );
  }
}
