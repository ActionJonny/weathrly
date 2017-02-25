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

      <section className='sevenHourSection'>
        <div className='sevenHourCard'>
          <p>Temp: {locationResults.sevenHourForecast[0].temp}</p>
          <p>{locationResults.sevenHourForecast[0].hour}</p>
          <p>Condition: {locationResults.sevenHourForecast[0].condition}</p>
          <p>{locationResults.sevenHourForecast[0].icon}</p>
        </div>

        <div className='sevenHourCard'>
          <p>Temp: {locationResults.sevenHourForecast[1].temp}</p>
          <p>{locationResults.sevenHourForecast[1].hour}</p>
          <p>Condition: {locationResults.sevenHourForecast[1].condition}</p>
          <p>{locationResults.sevenHourForecast[1].icon}</p>
        </div>

        <div className='sevenHourCard'>
          <p>Temp: {locationResults.sevenHourForecast[2].temp}</p>
          <p>{locationResults.sevenHourForecast[2].hour}</p>
          <p>Condition: {locationResults.sevenHourForecast[2].condition}</p>
          <p>{locationResults.sevenHourForecast[2].icon}</p>
        </div>

        <div className='sevenHourCard'>
          <p>Temp: {locationResults.sevenHourForecast[3].temp}</p>
          <p>{locationResults.sevenHourForecast[3].hour}</p>
          <p>Condition: {locationResults.sevenHourForecast[3].condition}</p>
          <p>{locationResults.sevenHourForecast[3].icon}</p>
        </div>

        <div className='sevenHourCard'>
          <p>Temp: {locationResults.sevenHourForecast[4].temp}</p>
          <p>{locationResults.sevenHourForecast[4].hour}</p>
          <p>Condition: {locationResults.sevenHourForecast[4].condition}</p>
          <p>{locationResults.sevenHourForecast[4].icon}</p>
        </div>

        <div className='sevenHourCard'>
          <p>Temp: {locationResults.sevenHourForecast[5].temp}</p>
          <p>{locationResults.sevenHourForecast[5].hour}</p>
          <p>Condition: {locationResults.sevenHourForecast[5].condition}</p>
          <p>{locationResults.sevenHourForecast[5].icon}</p>
        </div>

        <div className='sevenHourCard'>
          <p>Temp: {locationResults.sevenHourForecast[6].temp}</p>
          <p>{locationResults.sevenHourForecast[6].hour}</p>
          <p>Condition: {locationResults.sevenHourForecast[6].condition}</p>
          <p>{locationResults.sevenHourForecast[6].icon}</p>
        </div>
      </section>

      <section className='tenDaySection'>
        <div className='tenDayCard'>
          <p>{locationResults.tenDayForecast[0].monthName} {locationResults.tenDayForecast[0].monthDate}</p>
          <p>Low Temp: {locationResults.tenDayForecast[0].tenDayLowTemp}</p>
          <p>High Temp: {locationResults.tenDayForecast[0].tenDayHighTemp}</p>
          <p>{locationResults.tenDayForecast[0].weatherIcons}</p>
        </div>

        <div className='tenDayCard'>
          <p>{locationResults.tenDayForecast[1].monthName} {locationResults.tenDayForecast[1].monthDate}</p>
          <p>Low Temp: {locationResults.tenDayForecast[1].tenDayLowTemp}</p>
          <p>High Temp: {locationResults.tenDayForecast[1].tenDayHighTemp}</p>
          <p>{locationResults.tenDayForecast[1].weatherIcons}</p>
        </div>

        <div className='tenDayCard'>
          <p>{locationResults.tenDayForecast[2].monthName} {locationResults.tenDayForecast[2].monthDate}</p>
          <p>Low Temp: {locationResults.tenDayForecast[2].tenDayLowTemp}</p>
          <p>High Temp: {locationResults.tenDayForecast[2].tenDayHighTemp}</p>
          <p>{locationResults.tenDayForecast[2].weatherIcons}</p>
        </div>

        <div className='tenDayCard'>
          <p>{locationResults.tenDayForecast[3].monthName} {locationResults.tenDayForecast[3].monthDate}</p>
          <p>Low Temp: {locationResults.tenDayForecast[3].tenDayLowTemp}</p>
          <p>High Temp: {locationResults.tenDayForecast[3].tenDayHighTemp}</p>
          <p>{locationResults.tenDayForecast[3].weatherIcons}</p>
        </div>

        <div className='tenDayCard'>
          <p>{locationResults.tenDayForecast[4].monthName} {locationResults.tenDayForecast[4].monthDate}</p>
          <p>Low Temp: {locationResults.tenDayForecast[4].tenDayLowTemp}</p>
          <p>High Temp: {locationResults.tenDayForecast[4].tenDayHighTemp}</p>
          <p>{locationResults.tenDayForecast[4].weatherIcons}</p>
        </div>

        <div className='tenDayCard'>
          <p>{locationResults.tenDayForecast[5].monthName} {locationResults.tenDayForecast[5].monthDate}</p>
          <p>Low Temp: {locationResults.tenDayForecast[5].tenDayLowTemp}</p>
          <p>High Temp: {locationResults.tenDayForecast[5].tenDayHighTemp}</p>
          <p>{locationResults.tenDayForecast[5].weatherIcons}</p>
        </div>

        <div className='tenDayCard'>
          <p>{locationResults.tenDayForecast[6].monthName} {locationResults.tenDayForecast[6].monthDate}</p>
          <p>Low Temp: {locationResults.tenDayForecast[6].tenDayLowTemp}</p>
          <p>High Temp: {locationResults.tenDayForecast[6].tenDayHighTemp}</p>
          <p>{locationResults.tenDayForecast[6].weatherIcons}</p>
        </div>

        <div className='tenDayCard'>
          <p>{locationResults.tenDayForecast[7].monthName} {locationResults.tenDayForecast[7].monthDate}</p>
          <p>Low Temp: {locationResults.tenDayForecast[7].tenDayLowTemp}</p>
          <p>High Temp: {locationResults.tenDayForecast[7].tenDayHighTemp}</p>
          <p>{locationResults.tenDayForecast[7].weatherIcons}</p>
        </div>

        <div className='tenDayCard'>
          <p>{locationResults.tenDayForecast[8].monthName} {locationResults.tenDayForecast[8].monthDate}</p>
          <p>Low Temp: {locationResults.tenDayForecast[8].tenDayLowTemp}</p>
          <p>High Temp: {locationResults.tenDayForecast[8].tenDayHighTemp}</p>
          <p>{locationResults.tenDayForecast[8].weatherIcons}</p>
        </div>

        <div className='tenDayCard'>
          <p>{locationResults.tenDayForecast[9].monthName} {locationResults.tenDayForecast[9].monthDate}</p>
          <p>Low Temp: {locationResults.tenDayForecast[9].tenDayLowTemp}</p>
          <p>High Temp: {locationResults.tenDayForecast[9].tenDayHighTemp}</p>
          <p>{locationResults.tenDayForecast[9].weatherIcons}</p>
        </div>
      </section>

    </div>
  )
}

export default Weather
