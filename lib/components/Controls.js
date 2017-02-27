import React, { Component } from 'react';
import Weather from './Weather';
import TenDay from './TenDay';
import SevenHour from './SevenHour';
import $ from 'jquery';
import dataCleaner from '../helpers/dataCleaner'

export default class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationInputField: localStorage.getItem('recentSearch') || '',
      locationResults: {},
      error: false,
    };
  }

  componentDidMount() {
    if (localStorage.length) {
      this.handleClickEvent();
    }
  }

  locationError(data) {
    if (data.response.error || data.response.results) {
      this.setState({ error: true });
    } else {
      this.setState({ error: false });
    }
  }

  handleClickEvent() {
    $.get(this.props.source + this.state.locationInputField + '.json')
      .then(data => {
        this.locationError(data);
        this.state.locationResults = dataCleaner(data);
        localStorage.setItem('recentSearch', this.state.locationInputField);
        this.setState({ locationInputField: '', locationResults: this.state.locationResults });
      });
  }


  render() {
    return (
      <div>
        <div className='header'>
          <h1>weathrly</h1>
          <div className='inputs'>
            <input placeholder='City, State or Zip Code'
                   className='searchInput'
                   type='text'
                   value={this.state.locationInputField}
                   onChange={(e) => this.setState({ locationInputField: e.target.value })}/>
            {this.state.error ?
              (<p className='errorMessage'>Please Enter A Valid Location</p>) : null}
            <input className='searchSubmit' type='submit' onClick={() => this.handleClickEvent()}/>
          </div>
        </div>
        <Weather locationResults={this.state.locationResults}/>
        <h2>Seven Hour Forecast</h2>
        <SevenHour locationResults={this.state.locationResults} />
        <h3>Ten Day Forecast</h3>
        <TenDay locationResults={this.state.locationResults} />
      </div>
    );
  }
}
