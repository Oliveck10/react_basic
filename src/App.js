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
      red: 0,
      green: 0,
      blue: 0,
    };
    this.update = this.update.bind(this);
  }
  update(e) {
    this.setState({
      // txt: e.target.value,
      txt: ReactDOM.findDOMNode(this.refs.txtt).value, // seperate input from scroll bar
      red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
      green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
      blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value,
    });
  }
  render() {
   // can not return several doms => pack several nodes into single dom
    const txt = this.props.txt;
    const cat = this.state.cat;
    return (
      <div>
        <h1>{txt}</h1>
        <h2>{cat}</h2>
        <input type="text" ref="txtt"
          onChange={this.update} />
        <h3>{`Start: ${this.state.txt}`}</h3>

        <hr />

        <Slider ref="red" update={this.update} /> <br />
        {this.state.red} <br />
        <Slider ref="green" update={this.update} /> <br />
        {this.state.green} <br />
        <Slider ref="blue" update={this.update} /> <br />
        {this.state.blue} <br />
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

// ReactDOM.render(
//   <App cat={5} />, document.getElementById('app')
// );

class Slider extends React.Component {
  render() {
    return (
      <div>
        <input ref="inp"
          type="range"
          min="0"
          max="255"
          onChange={this.props.update} />
      </div>
    );
  }
}

// const Widget = (props) => {
//   return (
//     <div>
//       <input type="text"
//         onChange={props.update} />
//       <h3>{`${props.txt}`}</h3>
//     </div>
//   );
// };

export default App;
