import React from 'react'

const TenDay = ({ tenDayResults }) => {
  
  return (
    <div>
      <p>{tenDayResults.tenDayHighTemp}</p>
      <p>{tenDayResults.tenDayLowTemp}</p>
      <p>{tenDayResults.monthDate}</p>
      <p>{tenDayResults.monthName}</p>
    </div>
  )
}

export default TenDay
