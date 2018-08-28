import React from 'react';
import ReactDOM from 'react-dom';
import events from './data/events.json';
import Component from './Events.js';

// class Hello extends React.Component {
//     onLinkClicked(number, event) {
//       event.preventDefault();
//       console.log('Hello number ' + number + '!');
//     }
   
//     render() {
//       return (
//         <ul>
//           <li>
//             <button onClick={this.onLinkClicked.bind(this, 1)}>
//               Say One!
//             </button>
//           </li>
//           <li>
//             <button onClick={this.onLinkClicked.bind(this, 2)}>
//               Say Two!
//             </button>
//           </li>
//         </ul>
//       );
//     }
//   }

// ReactDOM.render(<Hello />, document.getElementById('root'));
ReactDOM.render(<Component events={events}/>, document.getElementById('root'));
