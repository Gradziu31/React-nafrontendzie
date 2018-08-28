import React from 'react';

// tutaj bind this tak jakby jest nie ważny ponieważ nadpisuje go i tak bind z index.js
const Item = (props) => {
    return <button onClick={props.onItemClicked.bind(this, 'param')}>Click me!</button>
  };

  export default Item;