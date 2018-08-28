import React from 'react';
import ReactDOM from 'react-dom';

// variables
const text = 'World';
const number = 7;
const number2 = 1;
const styleObject = { color: 'red', fontWeight: 'bold', backgroundColor: 'yellow' };
const names = ['Henryk', 'Zdzisław', 'Janusz'];

const example = <p className={number === 10 ? 'class1' : 'class2'}>Hello {text}!</p>
const example2 = <p className="nameClass" style={styleObject}>Suma {number+number2+2}</p>

const rain = true;
let link = null;
if (rain) {
    link = <a href="#">Sprawdz pogodę!</a>
};

const app = ( 
  <div>
    <h3>Przykłady wyświetlania zmiennych z różną zawartością:</h3>
    <p>{example}</p>
    <p>{example2}</p>
    <h3>Metoda MAP</h3>
    {names.map((name, index) => {
        return <span key={index}>{name}, </span>;
    })}
    <h3>Opcje użycia if'a</h3>
    <div>
    {link} Widzisz link to znaczy że pada ;/ <br />
    ten sam efekt za pomocą if'a w kodzie {rain ? <a href="#">Pada!</a> : null} 
    </div>
  </div>
);

ReactDOM.render(app, document.getElementById('root'));
