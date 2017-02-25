import sevenHourCleaner from './sevenHourCleaner';
import tenDayCleaner from './tenDayCleaner';

const dataCleaner = (data) => {
  let object = {
    currentCity   : data.location.city,
    currentState  : data.location.state,
    currentTemp   : data.current_observation.temp_f,
    shortCondition: data.current_observation.weather,
    longCondition : data.forecast.txt_forecast.forecastday[0].fcttext,
    todayHighTemp : data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
    todayLowTemp  : data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
    hourlyTime    : data.hourly_forecast[0].FCTTIME.civil,
    hourlyTemp    : data.hourly_forecast[0].temp.english,
    dayAndMonth   : data.forecast.simpleforecast.forecastday[0].date.monthname + ' ' + data.forecast.simpleforecast.forecastday[0].date.day,
    sevenHourForecast: sevenHourCleaner(data.hourly_forecast),

    tenDayForecast: tenDayCleaner(data.forecast.simpleforecast.forecastday)
  }
  return object
}

export default dataCleaner
