import React, { Component } from 'react';
import Weather from './Weather';
import TenDay from './tenDay';
import SevenHour from './SevenHour';
import $ from 'jquery';
import dataCleaner from '../helpers/dataCleaner';

export default class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationInputField: localStorage.getItem('recentSearch') || '',
      locationResults: {},
      error: false,
      pageLoad: false,
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
    $.get(`${this.props.source}${this.state.locationInputField}.json`)
      .then(data => {
        this.locationError(data);
        this.state.locationResults = dataCleaner(data);
        localStorage.setItem('recentSearch', this.state.locationInputField);
        this.setState({ locationInputField: '', locationResults: this.state.locationResults,
                        pageLoad: true });
      });
  }


  render() {
    return (
      <section>
        <header className='header'>
          <h1 tabIndex='0'>weathrly</h1>
          <article className='inputs'>
            <input placeholder='City, State or Zip Code'
                   className='searchInput'
                   type='text'
                   value={this.state.locationInputField}
                   onChange={(e) => this.setState({ locationInputField: e.target.value })}/>
              {this.state.error ?
              (<p className='errorMessage'>Please Enter A Valid Location</p>) : null}
            <input className='searchSubmit'
                   type='submit'
                   onClick={() => this.handleClickEvent()}/>
          </article>
        </header>
        <Weather locationResults={this.state.locationResults}/>
        {this.state.pageLoad ? (<h2 tabIndex='0'>Seven Hour Forecast</h2>) : null}
        <SevenHour locationResults={this.state.locationResults} />
        {this.state.pageLoad ? (<h3 tabIndex='0'>Ten Day Forecast</h3>) : null}
        <TenDay locationResults={this.state.locationResults} />
      </section>
    );
  }
}
