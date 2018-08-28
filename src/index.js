import React from 'react';
import ReactDOM from 'react-dom';
// import events from './data/events.json';
// import Component from './Events.js';
import Item from './Item.js';

 
// przekazywanie parametru od Item do Hello (podwójne bindowanie)
class Hello extends React.Component {
  onItemClicked(param, event) {
    event.preventDefault();
    console.log(param);
  }
 
  render() {
    return (
      <Item onItemClicked={this.onItemClicked.bind(this)} />
    );
  }
}

ReactDOM.render(<Hello />, document.getElementById('root'));
// ReactDOM.render(<Component events={events}/>, document.getElementById('root'));
