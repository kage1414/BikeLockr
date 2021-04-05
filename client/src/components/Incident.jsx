import React from 'react';

const Incident = (props) => {

  let date = new Date(props.data.occurred_at * 1000);
  let styles = {
    maxHeight: '100px',
    maxWidth: '100px'
  };

  return (
    <tr>
      <td>{props.data.title}</td>
      <td>{props.data.description}</td>
      <td>{props.data.address}</td>
      <td>{date.toString()}</td>
      {props.data.media.image_url_thumb &&
        <td><a href={props.data.media.image_url}><img src={props.data.media.image_url} style={styles} /></a></td>
      }
    </tr>
  );
};

export default Incident;