import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Shop extends Component {

  render() {
    return (
      <div className="ShopCart" data-testid="shopping-cart-button">
        <Link to="/">Voltar</Link>
        <p
          className="MessageEmpt"
          data-testid="shopping-cart-empty-message"
        >
          Seu carrinho está vazio</p>
      </div>
    );
  }
}

export default Shop;
