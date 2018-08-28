import React from 'react';
import ReactDOM from 'react-dom';
// import events from './data/events.json';
// import Component from './Events.js';

class Component extends React.Component {
    constructor(props) {
      super(props);
      this.state = { car: 'audi' };
    }
   
    onOptionChange(event) {
      const newValue = event.currentTarget.value;
      this.setState({ car: newValue });
    }
   
    render() {
      return (
        <form>
          <select onChange={this.onOptionChange.bind(this)} value={this.state.car}>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
            <option value="mercedes">Mercedes</option>
          </select>
        </form>
      );
    }
  }

ReactDOM.render(<Component />, document.getElementById('root'));
// ReactDOM.render(<Component events={events}/>, document.getElementById('root'));
