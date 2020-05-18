import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Details from './pages/Details';
import Checkout from './pages/Checkout';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/product/:id" component={Details} />
        <Route exact path="/checkout" component={Checkout} />
      </Switch>
    </Router>
  );
}

export default App;
