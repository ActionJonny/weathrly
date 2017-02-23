import React from 'react'

const Weather = ({ locationResults }) => {
  if(!locationResults.length) {
    return(
      <div>Please Select A City</div>
    )
  }
  return(
    <div>
      { locationResults.map((day, index) => {
        console.log(day[0]);
        return(
          <section key={index}>
            <p>{day[0].FCTTIME.month_name} {' '} {day[0].FCTTIME.mday + ','} {day[0].FCTTIME.year}</p>
            <p>Condition: {day[0].condition}</p>
            <p>Current Temp: {day[0].temp.english}</p>
          </section>
        )
      })

      }
    </div>
  )
}

export default Weather
