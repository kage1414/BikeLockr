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
    console.log('getPosition');
    this.setState({loadingLocation: true});
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((location) => {
        let coords = location.coords.latitude + ',' + location.coords.longitude;
        this.setState({
          coords: coords,
          loadingLocation: false});
        resolve(coords);
      });
    });
  }

  ajax(coords) {
    console.log('ajax');
    this.setState({ loadingData: true });
    $.ajax({
      url: '/theft',
      type: 'POST',
      data: {
        coordinates: this.state.coords
      },
      success: (data) => {
        console.log(data);
        this.setState({
          loadingData: false,
          instantiated: true });
        this.setState(data);
      }
    });
  }

  getIncidents() {
    console.log('getIncidents');
    this.setState({
      incidents: []
    });

    this.getPosition()
      .then((coords) => {
        this.ajax(coords);
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
        <Form getIncidents={this.getIncidents.bind(this)} />
        <AtRisk instantiated={this.state.instantiated} atRisk={this.state.atRisk} />
        <Loading location={this.state.loadingLocation} data={this.state.loadingData} />
        {renderIncidentList()}
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));