import React from 'react';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.getIncidents = this.getIncidents.bind(this);
  }

  getIncidents(e) {
    console.log(e);
    e.preventDefault();
    this.props.getIncidents();
  }

  render() {
    return (
      <form>
        <input type="text"></input>
        <input type="submit" onClick={this.getIncidents} value="Should I Leave My Bike?"></input>
      </form>
    );
  }

}

export default Form;