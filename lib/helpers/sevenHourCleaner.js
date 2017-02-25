// const sevenHourCleaner = (forecast) => {
//   let sevenHour = forecast.slice(0, 7);
//   sevenHour.map((unit)=> {
//     unit = {
//       hour: unit.FCTTIME.civil,
//       temp: unit.temp.english,
//       condition: unit.condition,
//       icon: unit.icon_url,
//     }
//     return sevenHour
//   })
// }


const sevenHourCleaner = (forecast) => {
  let rawSeven = forecast.slice(0, 7);

   let sevenHour = rawSeven.map((unit)=> {
     unit = {
      hour: unit.FCTTIME.civil,
      temp: unit.temp.english,
      condition: unit.condition,
      icon: unit.icon_url,
     }
    return unit
   })
   return sevenHour
}

export default sevenHourCleaner;

