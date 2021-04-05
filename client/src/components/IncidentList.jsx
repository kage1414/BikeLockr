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

        </thead>
        <tbody>
          {this.props.incidents.map((incident) => {
            return <Incident data={incident} key={Math.random()} />;
          })}
        </tbody>
      </table>
    );
  }
}

export default IncidentList;