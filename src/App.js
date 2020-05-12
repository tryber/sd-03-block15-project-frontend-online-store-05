import React from 'react';
import './App.css';
import * as api from './services/api';

function App() {
  api.getCategories()
    .then((categories) => { console.log(categories); });
  return (
    <div className="App" />
  );
}

export default App;
