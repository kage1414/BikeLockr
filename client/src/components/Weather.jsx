import React from 'react';

const Weather = (props) => {

  let date = new Date(props.minutes * 1000);

  if (props.minutes) {
    return (
      <div>Precipitation predicted at {date.toTimeString()}</div>
    );
  } else {
    return (
      <div>No precipitation in the forecast</div>
    );
  }

};

export default Weather;