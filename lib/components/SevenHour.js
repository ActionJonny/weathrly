import React from 'react'
import SevenHourCard from './sevenHourCard'

const SevenHour = (props) => {
  let arr = [];
  if (props.locationResults.sevenHourForecast) {
    arr = props.locationResults.sevenHourForecast.map( (hourForecast, index) => {
      return <SevenHourCard {...hourForecast} key={index}/>
    })}
    return <div>{arr}</div>
  }
export default SevenHour
