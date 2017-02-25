import React from 'react'
import SevenHourCard from './sevenHourCard'

const SevenHour = (props) => {
  let arr = [];
  if (props.locationResults.sevenHourForecast) {
    arr = props.locationResults.sevenHourForecast.map( (hourForecast, index) => {
      return <SevenHourCard {...hourForecast} key={index}/>
    })}
    return <section className="sevenHourSection">{arr}</section>
  }
export default SevenHour
