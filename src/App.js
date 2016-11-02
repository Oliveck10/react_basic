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
    this.update = this.update.bind(this);
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
          onChange={this.update} />
        <h3>{`Start: ${this.state.txt}`}</h3>
        <Widget txt={this.state.txt} update={this.update} />
        <Widget txt={this.state.txt} update={this.update} />
        <Widget txt={this.state.txt} update={this.update} />
        <Widget txt={this.state.txt} update={this.update} />
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

const Widget = (props) => {
  return (
    <div>
      <input type="text"
        onChange={props.update} />
      <h3>{`${props.txt}`}</h3>
    </div>
  );
};

export default App;
