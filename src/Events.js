import React from 'react';

// komponent funkcyjny z poprzedniego ćwiczenia ma ograniczone możliwości i może być użyty tylko w niektórych sytuacjach.

class Component extends React.Component {
    render() {
      return (
        <ul>
      {this.props.events.map((item) => {
        const date = new Date(item.date);
  
        if(date >= Date.now()){
          return (
            <li key={item.id}>
            <b>{item.name}</b><br />
            Gdzie: {item.place}<br />
            Kiedy: {item.date} - {item.time}
            </li>
          );
        }
        return null;
      })}
    </ul>
      )
    }
  }

  export default Component;