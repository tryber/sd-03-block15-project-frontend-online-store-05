import React, { Component, Fragment } from 'react';
import './Home.css'

export class Shop extends Component {
  render() {
    return (
      <div className="Shop">
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </div>
    );
  }
}

export default Shop;
