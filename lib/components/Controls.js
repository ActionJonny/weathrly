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
      console.log(this.state.locationResults);
      localStorage.setItem('recentSearch', this.state.locationInputField)
      this.setState({ locationInputField: '', locationResults: this.state.locationResults })
    })
  }

  render() {
    return (
      <div>
        <div className='header'>
          <h1>weathrly</h1>
          <input placeholder='City, State or Zip Code' className='searchInput' type='text' value={this.state.locationInputField}
                             onChange={(e) => this.setState({ locationInputField: e.target.value })}/>
          <input className='searchSubmit' type='submit' onClick={() => this.handleClickEvent()}/>
        </div>
        <Weather locationResults={this.state.locationResults}/>
        <section> Seven Hour Forecast </section>
        <SevenHour locationResults={this.state.locationResults} />
        <section> Ten Day Forecast </section>
        <TenDay locationResults={this.state.locationResults} />
      </div>
    );
  }
}
