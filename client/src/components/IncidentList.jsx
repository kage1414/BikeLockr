import React from 'react';
import Incident from './Incident.jsx';

class IncidentList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Address</td>
            <td>Date</td>
            <td>Image</td>
          </tr>
        </thead>
        <tbody>
          {this.props.incidents.map((incident) => {
            console.log(incident);
            return <Incident data={incident} key={incident.id} />;
          })}
        </tbody>
      </table>
    );
  }
}

export default IncidentList;