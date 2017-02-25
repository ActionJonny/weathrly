import React from 'react'

const SevenHourCard = ({ hour, temp, condition, icon }) => {
  return (
    <div>
      <p>{hour}</p>
      <p>{temp}</p>
      <p>{condition}</p>
      <p>{icon}</p>
    </div>
  )
}

export default SevenHourCard
