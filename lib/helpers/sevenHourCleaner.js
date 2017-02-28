const sevenHourCleaner = (forecast) => {
  const rawSeven = forecast.slice(0, 7);

  const sevenHour = rawSeven.map((unit) => {
    unit = {
      hour: unit.FCTTIME.civil,
      temp: unit.temp.english,
      condition: unit.condition,
      icon: unit.icon_url,
    };
    return unit;
  });
  return sevenHour;
};

export default sevenHourCleaner;
