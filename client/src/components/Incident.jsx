import React from 'react';

const Incident = (props) => {

  return (<tr><td>{JSON.stringify(props.data)}</td></tr>);
};

export default Incident;