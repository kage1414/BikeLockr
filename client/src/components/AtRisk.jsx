import React from 'react';
import Weather from './Weather.jsx';

const AtRisk = (props) => {

  let risk;
  let subRisk;

  if (props.theft) {
    risk = 'No,';
    subRisk = 'Do not leave it unattended';
  } else if (props.minutes) {
    risk = 'No,';
    subRisk = 'Rain is in the forecast';
  } else {
    risk = 'Yes...';
    subRisk = 'but you should always lock it up';
  }

  return (
    <div>
      {props.instantiated &&
      <div>
        <Weather minutes={props.minutes} />
        <h2 style={{margin: '0px'}}>{risk}</h2>
        <h3 style={{ margin: '0px' }}>{subRisk}</h3>
      </div>}
    </div>
  );

};

export default AtRisk;