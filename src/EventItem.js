import React from 'react';

const EventItem = (props) => {
    return (
        <li key={props.item.id}>
        <b>{props.item.name}</b><br />
        Gdzie: {props.item.place}<br />
        Kiedy: {props.item.date} - {props.item.time}<br />
        <button onClick={props.onLinkClicked.bind(this, props.item.id)}>usuń</button>
        </li>
    )
}

export default EventItem;