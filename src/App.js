import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Details from './pages/Details';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Shop" component={Shop} />
        <Route exact path="/product/:id" component={Details} />
      </Switch>
    </Router>
  );
}

export default App;
