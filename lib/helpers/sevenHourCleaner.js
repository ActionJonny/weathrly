const sevenHourCleaner = (forecast) => {
  const rawSeven = forecast.slice(0, 7);

  const sevenHour = rawSeven.map((unit) => {
    const oneHour = {
      hour: unit.FCTTIME.civil,
      temp: unit.temp.english,
      condition: unit.condition,
      icon: unit.icon_url,
    };
    return oneHour;
  });
  return sevenHour;
};

export default sevenHourCleaner;
