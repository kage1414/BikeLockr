import React from 'react';
import ReactDOM from 'react-dom';
import IncidentList from './components/IncidentList.jsx';
import Form from './components/Form.jsx';
import Loading from './components/Loading.jsx';
import AtRisk from './components/AtRisk.jsx';
import axios from 'axios';

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

  getTheftData() {
    return axios.get('/theft', { params: {coordinates: this.state.coords}});
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

        return this.getTheftData();
      })
      .then((res) => {
        let otherState = {
          loadingData: false,
          instantiated: true
        };

        let state = Object.assign(res.data, otherState);

        this.setState(state);
      })
      .catch((err) => {
        this.setState({
          loadingData: false
        });
        console.log(err);
      });
  }

  getWeatherData() {
    return axios.get('/weather', { params: { coordinates: this.state.coords } })
      .then((data) => {
        console.log(data);
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
        <Form getNearbyIncidents={this.getNearbyIncidents.bind(this)} />
        <button onClick={this.getWeatherData.bind(this)}></button>
        <AtRisk instantiated={this.state.instantiated} theft={this.state.theft} />
        <Loading location={this.state.loadingLocation} data={this.state.loadingData} />
        {renderIncidentList()}
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));