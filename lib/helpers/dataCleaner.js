import sevenHourCleaner from './sevenHourCleaner';

const dataCleaner = (data) => {
  let object = {
    currentCity   : data.location.city,
    currentTemp   : data.current_observation.temp_f,
    shortCondition: data.current_observation.weather,
    longCondition : data.forecast.txt_forecast.forecastday[0].fcttext,
    todayHighTemp : data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
    todayLowTemp  : data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
    hourlyTime    : data.hourly_forecast[0].FCTTIME.civil,
    hourlyTemp    : data.hourly_forecast[0].temp.english,
    dayAndMonth   : data.forecast.simpleforecast.forecastday[0].date.monthname + ' ' + data.forecast.simpleforecast.forecastday[0].date.day,
    // add in ten day forecast
    // add seven hour forecast
    sevenHrForecast: sevenHourCleaner(data.hourly_forecast),
  }
  return object
}

export default dataCleaner
