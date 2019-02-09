// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
//
//
// ReactDOM.render(<App />, document.getElementById('root'));


fetch('http://api.kinopoisk.cf/getCinemas', {mode: 'no-cors'})
.then((res) => {
  console.log(`${res.status}`)
})