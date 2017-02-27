import React from 'react'

const TenDayCard = ({ tenDayHighTemp, tenDayLowTemp, monthName, monthDate, weatherIcons, conditions }) => {
  return (
    <div tabIndex='0' className="tenDayCard">
      <p className='tenDayCardDate'>{monthName} {monthDate}</p>
      <img src={weatherIcons} alt={conditions}/>
      <p className='tenHigh'>H {tenDayHighTemp}°</p>
      <p className='tenLow'>L {tenDayLowTemp}°</p>
    </div>
  );
};

export default TenDayCard;
