import React from 'react';
import ReactDOM from 'react-dom';
import events from './data/events.json';
import Component from './Events.js';

// const Component = (props) => {
//     return <p>{props.text}</p>
// } 

ReactDOM.render(<Component events={events} />, document.getElementById('root'));
