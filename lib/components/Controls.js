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

  toggleTenDay() {
    let tenDayToggle = document.querySelector('.tenDaySection').style.display = 'block';
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
        <div className='header'>
          <h1>weathrly</h1>
          <div className='inputs'>
            <input placeholder='City, State or Zip Code' className='searchInput' type='text' value={this.state.locationInputField}
                             onChange={(e) => this.setState({ locationInputField: e.target.value })}/>
            <input className='searchSubmit' type='submit' onClick={() => this.handleClickEvent()}/>
          </div>
        </div>
        <Weather locationResults={this.state.locationResults}/>
        <h2>Seven Hour Forecast</h2>
        <SevenHour locationResults={this.state.locationResults} />
        <button className='tenDayButton'onClick={() => this.toggleTenDay()}>Ten Day Forecast</button>
        <TenDay locationResults={this.state.locationResults} />
      </div>
    );
  }
}
