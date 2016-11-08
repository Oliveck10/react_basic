import React from 'react';
import ReactDOM from 'react-dom';

// stateful function
class App extends React.Component {
  render() {
    return <h1>Hello~</h1>;
    // return React.createElement('h1', null, 'Yoyo!');
  }
}

// stateless function
// const App = () => <h1>Hello world!</h1>;


export default App;
