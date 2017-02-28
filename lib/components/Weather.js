import React from 'react';

const Weather = ({ locationResults }) => {
  if (!Object.keys(locationResults).length) {
    return (
      <p className='welcomeMessage'>Please Select A Location</p>
    );
  }
  return (
    <section className='present'>
      <article className='presentCityDate'>
        <p tabIndex='0'
           className='cityName'>
           {locationResults.currentCity}, {locationResults.currentState}</p>
        <p tabIndex='0' className='currentDay'>{locationResults.dayAndMonth}</p>
      </article>
      <article className='tempGroup'>
        <p tabIndex='0' className='currentTemp'>{locationResults.currentTemp}°</p>
        <section className='highLowPair'>
          <p tabIndex='0'>H {locationResults.todayHighTemp}°</p>
          <p tabIndex='0'>L {locationResults.todayLowTemp}°</p>
        </section>
      </article>
      <p tabIndex='0' className='longCond'>{locationResults.longCondition}</p>
    </section>
  );
};

export default Weather;
