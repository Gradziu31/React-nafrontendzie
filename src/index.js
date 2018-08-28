import React from 'react';
import ReactDOM from 'react-dom';
// import events from './data/events.json';
// import PropTypes from 'prop-types';
// import Component from './Events.js';

class HomeComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        name: 'Janusz', 
        age: 57,
        isActive: true
      };
    }
    // tutaj nadpisuje stan, po pierwszym ładowaniu - jest takich opcji więcej można o nich poczytac w dokumentacji.
    componentDidMount (){
        this.setState({
            isActive: false,
        })
    }
    render() {
        const containerClass = this.state.isActive ? 'active' : 'inactive';
  
      return (
        <div className={containerClass}>
          <h1>Imię: {this.state.name}</h1>
          <p>Wiek: {this.state.age}</p>
          <button onClick={() => this.setState({ isActive: false })}>Deaktywuj</button>
        </div>
      );
    }
  }

// ReactDOM.render(<Component events={events}/>, document.getElementById('root'));
ReactDOM.render(<HomeComponent />, document.getElementById('root'));
