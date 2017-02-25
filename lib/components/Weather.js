import React from 'react'

const Weather = ({ locationResults }) => {
  if(!Object.keys(locationResults).length) {
    return(
      <div>Please Select A City</div>
    )
  }
  return(
    <div>

      <div className='present'>
        <p className='cityName'>{locationResults.currentCity}, {locationResults.currentState}</p>
        <p className='currentDay'>{locationResults.dayAndMonth}</p>
        <div className='tempGroup'>
        <p className='currentTemp'>{locationResults.currentTemp}°</p>
          <div className='highLowPair'>
            <p>H {locationResults.todayHighTemp}°</p>
            <p>L {locationResults.todayLowTemp}°</p>
          </div>
        </div>
        <p className='longCond'>{locationResults.longCondition}</p>
      </div>

      <section className='tenDaySection'>
        <div className='tenDayCard'>
          <p>{locationResults.tenDayForecast[0].monthName} {locationResults.tenDayForecast[0].monthDate}</p>
          <p>Low Temp: {locationResults.tenDayForecast[0].tenDayLowTemp}</p>
          <p>High Temp: {locationResults.tenDayForecast[0].tenDayHighTemp}</p>
          <img src={locationResults.tenDayForecast[0].weatherIcons}/>
        </div>

        <div className='tenDayCard'>
          <p>{locationResults.tenDayForecast[1].monthName} {locationResults.tenDayForecast[1].monthDate}</p>
          <p>Low Temp: {locationResults.tenDayForecast[1].tenDayLowTemp}</p>
          <p>High Temp: {locationResults.tenDayForecast[1].tenDayHighTemp}</p>
          <img src={locationResults.tenDayForecast[1].weatherIcons}/>
        </div>

        <div className='tenDayCard'>
          <p>{locationResults.tenDayForecast[2].monthName} {locationResults.tenDayForecast[2].monthDate}</p>
          <p>Low Temp: {locationResults.tenDayForecast[2].tenDayLowTemp}</p>
          <p>High Temp: {locationResults.tenDayForecast[2].tenDayHighTemp}</p>
          <img src={locationResults.tenDayForecast[2].weatherIcons}/>
        </div>

        <div className='tenDayCard'>
          <p>{locationResults.tenDayForecast[3].monthName} {locationResults.tenDayForecast[3].monthDate}</p>
          <p>Low Temp: {locationResults.tenDayForecast[3].tenDayLowTemp}</p>
          <p>High Temp: {locationResults.tenDayForecast[3].tenDayHighTemp}</p>
          <img src={locationResults.tenDayForecast[3].weatherIcons}/>
        </div>

        <div className='tenDayCard'>
          <p>{locationResults.tenDayForecast[4].monthName} {locationResults.tenDayForecast[4].monthDate}</p>
          <p>Low Temp: {locationResults.tenDayForecast[4].tenDayLowTemp}</p>
          <p>High Temp: {locationResults.tenDayForecast[4].tenDayHighTemp}</p>
          <img src={locationResults.tenDayForecast[4].weatherIcons}/>
        </div>

        <div className='tenDayCard'>
          <p>{locationResults.tenDayForecast[5].monthName} {locationResults.tenDayForecast[5].monthDate}</p>
          <p>Low Temp: {locationResults.tenDayForecast[5].tenDayLowTemp}</p>
          <p>High Temp: {locationResults.tenDayForecast[5].tenDayHighTemp}</p>
          <img src={locationResults.tenDayForecast[5].weatherIcons}/>
        </div>

        <div className='tenDayCard'>
          <p>{locationResults.tenDayForecast[6].monthName} {locationResults.tenDayForecast[6].monthDate}</p>
          <p>Low Temp: {locationResults.tenDayForecast[6].tenDayLowTemp}</p>
          <p>High Temp: {locationResults.tenDayForecast[6].tenDayHighTemp}</p>
          <img src={locationResults.tenDayForecast[6].weatherIcons}/>
        </div>

        <div className='tenDayCard'>
          <p>{locationResults.tenDayForecast[7].monthName} {locationResults.tenDayForecast[7].monthDate}</p>
          <p>Low Temp: {locationResults.tenDayForecast[7].tenDayLowTemp}</p>
          <p>High Temp: {locationResults.tenDayForecast[7].tenDayHighTemp}</p>
          <img src={locationResults.tenDayForecast[7].weatherIcons}/>
        </div>

        <div className='tenDayCard'>
          <p>{locationResults.tenDayForecast[8].monthName} {locationResults.tenDayForecast[8].monthDate}</p>
          <p>Low Temp: {locationResults.tenDayForecast[8].tenDayLowTemp}</p>
          <p>High Temp: {locationResults.tenDayForecast[8].tenDayHighTemp}</p>
          <img src={locationResults.tenDayForecast[8].weatherIcons}/>
        </div>

        <div className='tenDayCard'>
          <p>{locationResults.tenDayForecast[9].monthName} {locationResults.tenDayForecast[9].monthDate}</p>
          <p>Low Temp: {locationResults.tenDayForecast[9].tenDayLowTemp}</p>
          <p>High Temp: {locationResults.tenDayForecast[9].tenDayHighTemp}</p>
          <img src={locationResults.tenDayForecast[9].weatherIcons}/>
        </div>
      </section>

    </div>
  )
}

export default Weather
