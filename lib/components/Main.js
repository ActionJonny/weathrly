import React, { Component } from 'react';
import Controls from './Controls';

export default class Main extends Component {
  render() {
    return (
      <div>
        <Controls source='http://api.wunderground.com/api/e94636a61d05b634/hourly10day/q/CO/' tenDaySource='http://api.wunderground.com/api/e94636a61d05b634/forecast10day/q/CO/' />
      </div>
    )
  }
}
