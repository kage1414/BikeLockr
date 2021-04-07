import React from 'react';

const Weather = (props) => {

  let date = new Date(props.minutes * 1000);

  if (props.minutes) {
    return (
      <div>Precipitation predicted at {date.toDateString()}</div>
    );
  } else {
    return (
      <div></div>
    );
  }

};

export default Weather;