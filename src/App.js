import React from 'react';
import Home from './pages/Home';
import Shop from './pages/Shop';
import * as api from './services/api';

function App() {
  api.getProductsFromQuery('cachorro')
    .then((results) => console.log(results));
  return (
    <div>
      <Home path="/" />
      <Shop path="/shop" />
    </div>
  );
}

export default App;
