import React from 'react'


const Weather = ({ locationResults }) => {
  if(!Object.keys(locationResults).length) {
    return(
      <div>Please Select A City</div>
    )
  }
  return(
    <div>
      <p>{locationResults.currentTemp}°</p>
      <p>H{locationResults.todayHighTemp}°</p>
      <p>L{locationResults.todayLowTemp}°</p>
      <p>{locationResults.currentCity}</p>
    </div>
  )
}

export default Weather
