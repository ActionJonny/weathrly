import React from 'react';

const Weather = ({ locationResults }) => {
  if (!Object.keys(locationResults).length) {
    return (
      <div className='welcomeMessage'>Please Select A Location</div>
    );
  }
  return (
    <div>
      <div className='present'>
        <div className='presentCityDate'>
          <p tabIndex='0' className='cityName'>{locationResults.currentCity},
                                               {locationResults.currentState}</p>
          <p tabIndex='0' className='currentDay'>{locationResults.dayAndMonth}</p>
        </div>
        <div className='tempGroup'>
          <p tabIndex='0' className='currentTemp'>{locationResults.currentTemp}°</p>
          <div className='highLowPair'>
            <p tabIndex='0'>H {locationResults.todayHighTemp}°</p>
            <p tabIndex='0'>L {locationResults.todayLowTemp}°</p>
          </div>
        </div>
        <p tabIndex='0' className='longCond'>{locationResults.longCondition}</p>
      </div>

    </div>
  );
};

export default Weather;
