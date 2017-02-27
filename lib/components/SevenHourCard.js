import React from 'react'

const SevenHourCard = ({ hour, temp, condition, icon }) => {
  return (
    <div className="sevenHourCard">
      <img src={icon} />
      <p>{hour}</p>
      <p className='sevenHourTemp'>{temp}°</p>
      <p>{condition}</p>
    </div>
  )
}

export default SevenHourCard
