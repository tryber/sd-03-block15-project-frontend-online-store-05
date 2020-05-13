import React from 'react';
import './App.css';
import * as api from './services/api';
import ProductList from './components/ProductList';

function App() {
  api.getCategories()
    .then((categories) => { console.log(categories); });
  return (
    <div className="App" >
      <ProductList />
    </div>
  );
}

export default App;
