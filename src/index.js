import React from 'react';
import ReactDOM from 'react-dom';
// import events from './data/events.json';
// import PropTypes from 'prop-types';
// import Component from './Events.js';


// Poniżej przykład w którym przekazuję stan początkowy do zagnieżdzonego komponentu
class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            text: 'Janusz', 
            age: 57,
            click: 0,
        };
    }
    render(){
        return (
            <div>
            <h1>Wyrenderowane ze stanu:</h1>
            <p>Imię: {this.state.text}</p>
            <p>Wiek: {this.state.age}</p>
            <UserData text={this.state.text} age={this.state.age}/>
            <div>
                <h1>Hit Click: {this.state.click}</h1>
                <button onClick={() => this.setState({click: this.state.click + 1})}>HIT!</button>
            </div>
            </div>
        )
    }   
}

const UserData = (props) => {
    return (
      <div>
      <h1>Przekazane wartości przez props:</h1>
        <p>Imię: {props.text}</p>
        <p><strong>wiek:</strong> {props.age}</p>
      </div>
    );
}

// ReactDOM.render(<Component events={events}/>, document.getElementById('root'));
ReactDOM.render(<HomeComponent />, document.getElementById('root'));
