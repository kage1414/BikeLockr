import React from 'react';
import Incident from './Incident.jsx';

class IncidentList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Incidents in the last 30 Days: </h3>
        {this.props.incidents.map((incident) => {
          return <Incident data={incident} key={incident.id} />;
        })}
      </div>
    );
  }
}

export default IncidentList;