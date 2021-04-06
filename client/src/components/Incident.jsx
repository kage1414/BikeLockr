import React from 'react';

const Incident = (props) => {

  let date = new Date(props.data.occurred_at * 1000);
  let styles = {
    maxHeight: '100px',
    maxWidth: '100px'
  };

  return (
    // <tr>
    //   <td>
    <div style={{width: 'auto', height: 'auto', border: '1px solid black', fontSize: '18px'}}>
      {props.data.title}
      <div style={{ fontSize: '14px'}}>
        {props.data.description}
      </div>
      <div style={{ fontSize: '14px' }}>
        {props.data.address}
      </div>
      <div style={{ fontSize: '14px' }}>
        {date.toString()}
      </div>
    </div>
    //   </td>
    // </tr>
  );
};

export default Incident;