import React from 'react';
import ReactDOM from 'react-dom';

// import App from './helloWorld';
import App from './renderOneNode';


const dst = document.getElementById('app');
ReactDOM.render(<App cat={5} />, dst);
