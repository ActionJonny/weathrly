import React from 'react'

const Weather = ({ locationResults }) => {
  if(!locationResults.length) {
    return(
      <div>Please Select A City</div>
    )
  }
  return(
    <div>
      console.log('shit');
    </div>
  )
}

export default Weather
