import React from 'react';

const getEvents = (events) => {
    return (
    <ul>
      {events.map((item) => {
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
    );
  }

  export default getEvents;