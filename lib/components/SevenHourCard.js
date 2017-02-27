import React from 'react'

const SevenHourCard = ({ hour, temp, condition, icon }) => {
  return (
    <div className="sevenHourCard">
      <img src={icon} />
      <p className='hourCardHour'>{hour}</p>
      <p className='hourCardTemp'>{temp}°</p>
      <p className='hourCardCond'>{condition}</p>
    </div>
  )
}

export default SevenHourCard
