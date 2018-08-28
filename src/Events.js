import React from 'react';
import PropTypes from 'prop-types';

class Component extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      events: [],
    }
  }
  onLinkClicked(numberId, event) {
    event.preventDefault();
    
    const filteredArray = this.state.events.filter(item => item.id !== numberId )

    this.setState({
      events: filteredArray
    });
  }
  componentDidMount() {
    this.setState({
      events: this.props.events,
    })
  }
  clear(event) {
    event.preventDefault();

    this.setState({
      events: [],
    })
  }
  static propTypes = {
    events: PropTypes.array.isRequired
  };
    render() {
      return (
        <div>
        <ul>
      {this.state.events.map((item) => {
        const date = new Date(item.date);
  
        if(date >= Date.now()){
          return (
            <li key={item.id}>
            <b>{item.name}</b><br />
            Gdzie: {item.place}<br />
            Kiedy: {item.date} - {item.time}<br />
            <button onClick={this.onLinkClicked.bind(this, item.id)}>usuń</button>
            </li>
          );
        }
        return null;
      })}
    </ul>
    <button onClick={this.clear.bind(this)}>wyczyść</button>
        </div>
      )
    }
  }

  export default Component;