import React from 'react';
import ReactDOM from 'react-dom';
import events from './data/events.json';
import Component from './Events.js';

// class Hello extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { text: 'Hello!' };

//       this.onLinkClicked = this.onLinkClicked.bind(this);
//     }
   
//     onLinkClicked(event) {
//       event.preventDefault();
//       this.setState({ text: 'Goodbye!' });
//     }
   
//     render() {
//       return (
//         <div>
//         <p>{this.state.text}</p>
//         <a href="/" onClick={this.onLinkClicked}>
//           Say Goodbye!
//         </a>
//         </div>
//       );
//     }
//   }

// ReactDOM.render(<Hello />, document.getElementById('root'));
ReactDOM.render(<Component events={events}/>, document.getElementById('root'));
