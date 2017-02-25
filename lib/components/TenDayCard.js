import React from 'react'

const TenDayCard = ({ hour, temp, condition, icon }) => {
  return (
    <div className="tenDayCard">
      <img src={icon} />
      <p>{hour}</p>
      <p>{temp}°</p>
      <p>{condition}</p>
    </div>
  )
}

export default TenDayCard
