import React from 'react';
import ReactDOM from 'react-dom';
import events from './data/events.json';
import Component from './Events.js';

ReactDOM.render(<Component events={events}/>, document.getElementById('root'));
