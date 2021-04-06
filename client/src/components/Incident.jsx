import React from 'react';

const Incident = (props) => {

  let date = new Date(props.data.occurred_at * 1000);

  return (
    <div style={{width: 'auto', height: 'auto', border: '1px solid black', fontSize: '18px'}}>
      {props.data.title}
      <div style={{ fontSize: '16px'}}>
        {props.data.description}
      </div>
      <div style={{ fontSize: '12px' }}>
        {props.data.address}
      </div>
      <div style={{ fontSize: '12px', fontStyle: 'italic' }}>
        {date.toDateString()}
      </div>
    </div>
  );
};

export default Incident;