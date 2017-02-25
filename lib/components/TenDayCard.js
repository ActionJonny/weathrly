import React from 'react'

const TenDayCard = ({ tenDayHighTemp, tenDayLowTemp, monthName, monthDate, weatherIcons }) => {
  return (
    <div className="tenDayCard">
      <p>{monthName}, {monthDate}</p>
      <img src={weatherIcons}/>
      <p>H{tenDayHighTemp}°</p>
      <p>L {tenDayLowTemp}°</p>
    </div>
  )
}

export default TenDayCard
