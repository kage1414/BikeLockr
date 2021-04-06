import React from 'react';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.getNearbyIncidents = this.getNearbyIncidents.bind(this);
  }

  getNearbyIncidents(e) {
    e.preventDefault();
    this.props.getNearbyIncidents();
  }

  render() {
    return (
      <form>
        {/* <input type="text"></input> */}
        <input type="submit" onClick={this.getNearbyIncidents} value="Should I Leave My Bike Unattended?"></input>
      </form>
    );
  }

}

export default Form;