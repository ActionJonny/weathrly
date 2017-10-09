import React, { Component } from 'react';
import Controls from './Controls';

export default class Main extends Component {
  render() {
    return (
      <Controls source='https://api.wunderground.com/api/e94636a61d05b634/forecast/hourly/forecast10day/conditions/geolookup/q/' />
    );
  }
}
