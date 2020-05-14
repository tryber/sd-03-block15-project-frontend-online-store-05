import React, { Component } from 'react';
import ProductCard from './products/ProductCard';

class ProductList extends Component {
  render() {
    return (
      <div>
        <h1>LISTA DE PRODUTOS</h1>
        <p>Você ainda não realizou uma busca ou Chama Product Card</p>
        <ProductCard />
      </div>
    );
  }
}

export default ProductList;
