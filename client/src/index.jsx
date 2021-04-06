import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import IncidentList from './components/IncidentList.jsx';
import Form from './components/Form.jsx';
import Loading from './components/Loading.jsx';
import AtRisk from './components/AtRisk.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      incidents: [],
      coords: '',
      loadingLocation: false,
      loadingData: false,
      instantiated: false
    };
  }

  getPosition() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((location) => {
        let coords = location.coords.latitude + ',' + location.coords.longitude;
        resolve(coords);
      });
    });
  }

  ajax() {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: '/theft',
        type: 'POST',
        data: {
          coordinates: this.state.coords
        },
        success: (data) => {
          resolve(data);
        },
        error: (err) => {
          reject(err);
        }
      });
    });
  }

  getNearbyIncidents() {

    this.setState({
      incidents: [],
      loadingLocation: true
    });

    this.getPosition()
      .then((coords) => {

        this.setState({
          coords: coords,
          loadingLocation: false,
          loadingData: true
        });

        return this.ajax();
      })
      .then((data) => {
        let otherState = {
          loadingData: false,
          instantiated: true
        };

        let state = Object.assign(data, otherState);

        this.setState(state);
      })
      .catch((err) => {
        this.setState({
          loadingData: false
        });
        console.log(err);
      });
  }

  render() {

    const renderIncidentList = () => {
      if (this.state.incidents.length > 0) {
        return <IncidentList incidents={this.state.incidents} />;
      }
    };

    return (
      <div>
        <h1>Lockr</h1>
        <Form getNearbyIncidents={this.getNearbyIncidents.bind(this)} />
        <AtRisk instantiated={this.state.instantiated} atRisk={this.state.atRisk} />
        <Loading location={this.state.loadingLocation} data={this.state.loadingData} />
        {renderIncidentList()}
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));