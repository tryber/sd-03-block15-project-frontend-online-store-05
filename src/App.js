import React from 'react';
import Home from './pages/Home';
import Shop from './pages/Shop';

function App() {
  return (
    <div>
      <Home path="/" />
      <Shop path="/shop" />
    </div>
  );
}

export default App;
