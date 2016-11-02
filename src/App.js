import React from 'react';
import ReactDOM from 'react-dom';

// stateless function
// const Hello = () => <h1>Hello ccc</h1>;

// state function (with state)
class App extends React.Component {
  render() {
   // can not return several doms => pack several nodes into single dom
    const txt = this.props.txt;
    const cat = this.props.cat;
    return (
      <div>
        <h1>{txt}</h1>
        <h2>{cat}</h2>
      </div>
    );
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired,
};

App.defaultProps = {
  txt: 'this is the default txt',
};

ReactDOM.render(
  <App cat={5} />, document.getElementById('app')
);

export default App;
