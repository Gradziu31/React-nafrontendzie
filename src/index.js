import React from 'react';
import ReactDOM from 'react-dom';
import events from './data/events.json';
import PropTypes from 'prop-types';
import Component from './Events.js';


// Kontrola typów przekazywanych do komponentu
// poniżej ustawiłem np. za pomocą prop-types że text ma przyjmować string (jeśli warunek nie będzie spełniony, dostaniemy informację w konsoli)
class HelloComponent extends React.Component {
    static propTypes = {
      text: PropTypes.string.isRequired
    };
   
    render() {
      return <p>{this.props.text}</p>;
    }
  }


  
ReactDOM.render(<Component events={events}/>, document.getElementById('root'));
