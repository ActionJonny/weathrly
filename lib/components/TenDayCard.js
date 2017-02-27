import React from 'react'

const TenDayCard = ({ tenDayHighTemp, tenDayLowTemp, monthName, monthDate, weatherIcons }) => {
  return (
    <div className="tenDayCard">
      <p className='tenDayCardDate'>{monthName} {monthDate}</p>
      <img src={weatherIcons}/>
      <p className='tenHigh'>H {tenDayHighTemp}°</p>
      <p className='tenLow'>L {tenDayLowTemp}°</p>
    </div>
  )
}

export default TenDayCard;
