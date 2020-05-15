import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

class Shop extends Component {
  render() {
    return (
      <div className="Shop">
        <img
          src="https://w7.pngwing.com/pngs/387/168/png-transparent-shopping-cart-button-graphy-earring-shopping-cart-angle-rectangle-logo.png"
          alt="shopping cart button"
          data-testid="shopping-cart-button"
        />
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        <Link to="/">
          Voltar
        </Link>
      </div>
    );
  }
}

export default Shop;
