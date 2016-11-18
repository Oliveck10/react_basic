import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1> {this.props.cat}</h1>
        <h2> {this.props.txt}</h2>
      </div>
    );
  }
}

App.propTypes = {
  cat: React.PropTypes.number,
  txt: React.PropTypes.string,
};

App.defaultProps = {
  txt: 'this is the default txt',
};

export default App;
