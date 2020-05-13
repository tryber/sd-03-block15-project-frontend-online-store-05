import React from 'react';
import * as api from './services/api';
import Home from './pages/Home';
import Shop from './pages/Shop';

function App() {
  api.getCategories()
    .then((categories) => { console.log(categories); });
  return (
    <div>
      <Home path="/" />
      <Shop path="/shop" />
    </div>
  );
}

export default App;
