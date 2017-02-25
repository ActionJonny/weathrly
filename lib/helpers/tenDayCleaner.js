const tenDayCleaner = data => {
  let tenDayData = data.forecast.simpleforecast.forecastday

  let someMapFunction     = tenDayData.map( object => {
    let someObject        = {
      tenDayHighTemp  : object.high.fahrenheit,
      tenDayLowTemp   : object.low.fahrenheit,
      monthName       : object.date.monthname,
      monthDate       : object.date.day,
      weatherIcons    : object.icon_url,
    }
    return someObject
  })
  return someMapFunction
}



export default tenDayCleaner
