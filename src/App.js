import React from 'react';
import ReactDOM from 'react-dom';

// stateless function
// const Hello = () => <h1>Hello ccc</h1>;

// state function (with state)
class App extends React.Component {
  constructor() {
    super(); // to get this available to call
    this.state = {
      txt: 'this is the state txt',
      cat: 0,
    };
  }
  update(e) {
    this.setState({ txt: e.target.value });
  }
  render() {
   // can not return several doms => pack several nodes into single dom
    const txt = this.props.txt;
    const cat = this.state.cat;
    return (
      <div>
        <h1>{txt}</h1>
        <h2>{cat}</h2>
        <input type="text"
          onChange={this.update.bind(this)} />
        <h3>{`${this.props.cat} ${this.state.txt}`}</h3>
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
  // cat : 2,
};

ReactDOM.render(
  <App cat={5} />, document.getElementById('app')
);

export default App;
