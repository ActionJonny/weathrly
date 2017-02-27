import React from 'react'
import TenDayCard from './TenDayCard'

const TenDay = (props) => {
  let arr = [];
  if (props.locationResults.tenDayForecast) {
    arr = props.locationResults.tenDayForecast.map( (EachDayForecast, index) => {
      return <TenDayCard {...EachDayForecast} key={index}/>
    })}
    return <section className="tenDaySection">{arr}</section>
  }
export default TenDay;