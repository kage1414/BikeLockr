import React from 'react';

const Weather = (props) => {

  if (props.rainsIn.getTime() > 0) {
    return (
      <div>Precipitation predicted ~{Math.floor(props.rainsIn.getTime() / 1000 / 60)} minutes</div>
    );
  } else {
    return (
      <div>No precipitation in the forecast</div>
    );
  }

};

export default Weather;