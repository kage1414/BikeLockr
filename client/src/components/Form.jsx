import React from 'react';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.getIncidents = this.getIncidents.bind(this);
  }

  getIncidents(e) {
    e.preventDefault();
    this.props.getIncidents();
  }

  render() {
    return (
      <form>
        <button onClick={this.getIncidents}>Should I Leave My Bike?</button>
        <input type="text"></input>
      </form>
    );
  }

}

export default Form;