import React from 'react';
import TenDayCard from './TenDayCard';

const TenDay = (props) => {
  let arr = [];
  if (props.locationResults.tenDayForecast) {
    arr = props.locationResults.tenDayForecast.map((eachDayForecast, index) => {
      return <TenDayCard {...eachDayForecast} key={index}/>;
    });
  }
  return <section className="tenDaySection">{arr}</section>;
};
export default TenDay;
