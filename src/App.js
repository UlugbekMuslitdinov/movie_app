import PropTypes from 'prop-types';
import React from 'react';

class App extends React.Component {

  state = {
    count: 0
  };

  add = () => {
    this.setState(current => ({count: current.count + 1}));
  }

  minus = () => {
    this.setState(current => ({count: current.count - 1}));
  }

  render(){
    return <div>
     <h1>Current number: {this.state.count}</h1>
     <button onClick={this.add}>Plus</button>
     <button onClick={this.minus}>Minus</button>
     </div>

  }
}

export default App;
