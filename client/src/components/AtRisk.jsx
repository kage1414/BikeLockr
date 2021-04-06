import React from 'react';

const AtRisk = (props) => {

  let risk;

  if (props.atRisk) {
    risk = 'No';
  } else {
    risk = 'Yes';
  }

  return (
    <div>
      {props.instantiated &&
      <div style={{ fontSize: '40px' }}>{risk}</div> }
    </div>
  );

};

export default AtRisk;