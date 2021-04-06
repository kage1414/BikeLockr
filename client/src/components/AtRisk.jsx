import React from 'react';

const AtRisk = (props) => {

  let risk;
  let subRisk;

  if (props.atRisk) {
    risk = 'No,';
    subRisk = 'Do not leave it unattended';
  } else {
    risk = 'Yes...';
    subRisk = 'but you should definitely lock it up';
  }

  return (
    <div>
      {props.instantiated &&
        <h2 style={{margin: '0px'}}>{risk}</h2> }
      {props.instantiated &&
        <h3 style={{ margin: '0px' }}>{subRisk}</h3> }
    </div>
  );

};

export default AtRisk;