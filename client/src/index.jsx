import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
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
      lat: '',
      lon: '',
      loadingLocation: false,
      loadingWeather: false,
      loadingData: false,
      instantiated: false,
      error: false
    };
  }

  getPosition() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((location) => {
        let data = {
          coords: location.coords.latitude + ',' + location.coords.longitude,
          lat: location.coords.latitude,
          lon: location.coords.longitude
        };
        resolve(data);
      });
    });
  }

  getTheftData() {
    return axios.get('/theft', { params: {coordinates: this.state.coords}});
  }

  getWeatherData() {
    return axios.get('/weather', {
      params: {
        lat: this.state.lat,
        lon: this.state.lon
      }
    })
      .then((data) => {
        return data;
      });
  }

  gatherData() {

    this.setState({
      loadingLocation: true,
      error: false
    });

    this.getPosition()
      .then((data) => {

        let otherState = {
          loadingLocation: false,
          loadingData: true
        };

        let state = Object.assign(data, otherState);

        this.setState(state);

        return this.getTheftData();
      })
      .then((incidents) => {
        let otherState = {
          loadingData: false,
          loadingWeather: true
        };

        let state = Object.assign(incidents.data, otherState);

        this.setState(state);

        return this.getWeatherData();
      })
      .then((minutes) => {
        let otherState = {
          loadingWeather: false,
          instantiated: true
        };

        let state = Object.assign(minutes.data, otherState);

        this.setState(state);
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
        this.setState({
          loadingLocation: false,
          loadingWeather: false,
          loadingData: false,
          error: err
        });
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
        <Form getNearbyIncidents={this.gatherData.bind(this)} />
        <AtRisk instantiated={this.state.instantiated} theft={this.state.theft} minutes={this.state.minutes} />
        <Loading location={this.state.loadingLocation} data={this.state.loadingData} weather={this.state.loadingWeather} />
        {renderIncidentList()}
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));