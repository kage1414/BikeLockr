import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import Promise from 'bluebird';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      incidents: [],
      coords: ''
    };
    // this.getIncidents();
  }

  getPosition() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((location) => {
        let lat = location.coords.latitude;
        let long = location.coords.longitude;
        resolve(lat + ',' + long);
      });
    });
  }

  // Sending to API. Refactor to send to server
  ajax(coords) {
    $.ajax({
      url: 'https://bikewise.org:443/api/v2/incidents',
      data: {
        proximity: coords
      },
      success: (data) => {
        this.setState({
          incidents: data
        });
      }
    });
  }

  getIncidents() {

    this.getPosition()
      .then((result) => {
        this.ajax(result);
      });

  }

  render() {
    return (
      <div>
        <h1>Lockr</h1>
        {/* <IncidentList incidents={this.state.incidents} /> */}
        <div onClick={this.getIncidents.bind(this)}>Hello</div>
      </div>
    );
  }

}

ReactDOM.render(<App/>, document.getElementById('root'));