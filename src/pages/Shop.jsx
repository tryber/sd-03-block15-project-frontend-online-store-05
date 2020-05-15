import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

class Shop extends Component {

  render() {
    return (
      <div className="ShopCart" data-testid="shopping-cart-button">
        <Link to="/">Voltar</Link>
        <p className="MessageEmpt" data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </div>
    );
  }
}

export default Shop;
