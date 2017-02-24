const sevenHourCleaner = (forecast) => {
  let sevenHour = forecast.slice(0, 7);
  sevenHour.forEach((unit)=> {
    return {
      hour: unit.FCTTIME.civil,
      temp: unit.temp.english,
      condition: unit.condition,
      icon: unit.icon_url,
    }
  })
}

export default sevenHourCleaner;

// sevenHour.reduce((day, newObj)=> {
//   //we want to the first 7 hours, and create an object out of it that has time, temp, condition, and the icon_url 
// }, [])
//want hourly_forecast[0-6]
////for each index, we want FCTTIME.civil  temp.english  .condition .icon_url 
