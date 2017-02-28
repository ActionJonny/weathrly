import React from 'react';

const SevenHourCard = ({ hour, temp, condition, icon }) =>
  (
    <article tabIndex='0' className="sevenHourCard">
      <img src={icon} alt={condition}/>
      <p className='hourCardHour'>{hour}</p>
      <p className='hourCardTemp'>{temp}°</p>
      <p className='hourCardCond'>{condition}</p>
    </article>
  );


export default SevenHourCard;
