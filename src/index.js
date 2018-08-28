import React from 'react';
import ReactDOM from 'react-dom';
import events from './data/events.json';
import PropTypes from 'prop-types';
// import Component from './Events.js';

// dobra opcja do opakowania kodu, wewnątrz mogę umieścić np. inny komponent (przykład użycia <ShowChildren>Hello! World!</ShowChildren>, wystarczy opleść nim kod)
const ShowChildren = (props) => {
    return (
        <div>
        <h1>{props.children}</h1>
        </div>
    );
}

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


  // W komponencie funkcyjnym wyglądało by to tak:
//   const HelloComponent2 = (props) => {
//     return <p>{props.text}</p>;
//   };
   
//   HelloComponent.propTypes = {
//     text: PropTypes.string.isRequired
//   };
  
ReactDOM.render(<HelloComponent text='Lorem ipsum...' />, document.getElementById('root'));
