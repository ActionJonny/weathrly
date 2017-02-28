const tenDayCleaner = data => {
  const someMapFunction = data.map(object => {
    const someObject = {
      tenDayHighTemp: object.high.fahrenheit,
      tenDayLowTemp: object.low.fahrenheit,
      monthName: object.date.monthname,
      monthDate: object.date.day,
      weatherIcons: object.icon_url,
      conditions: object.conditions,
    };
    return someObject;
  });
  return someMapFunction;
};

export default tenDayCleaner;
