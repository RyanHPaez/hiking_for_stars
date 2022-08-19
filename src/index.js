import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
const array = [];
while (true) {
  // This makes the array bigger on each iteration
  array.push(new Array(10000000));

  const memory = process.memoryUsage();
  console.log((memory.heapUsed / 1024 / 1024 / 1024).toFixed(4), 'GB');
}