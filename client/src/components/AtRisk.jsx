import React from 'react';

const AtRisk = (props) => {

  return (
    <div>
      {props.instantiated && <div style={{ fontSize: '40px' }}>No</div> }
    </div>
  );

};

export default AtRisk;