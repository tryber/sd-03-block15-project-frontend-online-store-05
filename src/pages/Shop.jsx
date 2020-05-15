import React, { Component } from 'react';
import './Home.css';

class Shop extends Component {
  render() {
    return (
      <div className="Shop" data-testid="shopping-cart-button">
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </div>
    );
  }
}

export default Shop;
