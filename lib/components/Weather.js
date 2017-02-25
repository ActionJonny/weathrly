import React from 'react'

const Weather = ({ locationResults }) => {
  if(!Object.keys(locationResults).length) {
    return(
      <div>Please Select A City</div>
    )
  }
  return(
    <div>
      <div>
        <p>{locationResults.currentCity}</p>
        <p>Current Temp {locationResults.currentTemp}°</p>
        <p>H {locationResults.todayHighTemp}°</p>
        <p>L {locationResults.todayLowTemp}°</p>
        <p>{locationResults.longCondition}</p>
      </div>
    </div>
  )
}

export default Weather
