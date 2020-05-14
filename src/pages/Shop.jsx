import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Shop extends Component {
  render() {
    return (
      <div className="Shop">
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        <Link to="/">
          Botao
        </Link>
      </div>
    );
  }
}

export default Shop;
