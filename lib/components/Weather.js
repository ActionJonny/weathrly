import React from 'react'

const Weather = ({ locationResults }) => {
  if(!Object.keys(locationResults).length) {
    return(
      <div>Please Select A City</div>
    )
  }
  return(
    <div className='present'>
      <div className='presentCityDate'>
        <p className='cityName'>{locationResults.currentCity}, {locationResults.currentState}</p>
        <p className='currentDay'>{locationResults.dayAndMonth}</p>
      </div>
      <div className='tempGroup'>
        <p className='currentTemp'>{locationResults.currentTemp}°</p>
        <div className='highLowPair'>
          <p>H {locationResults.todayHighTemp}°</p>
          <p>L {locationResults.todayLowTemp}°</p>
        </div>
      </div>
      <p className='longCond'>{locationResults.longCondition}</p>
    </div>
  )
}

export default Weather
