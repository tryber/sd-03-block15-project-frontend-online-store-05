import React, { Component } from 'react';
import ProductCard from './products/ProductCard';
import SearchBar from './SearchBar';

class ProductList extends Component {
  render() {
    return (
      <div>
        <h1>LISTA DE PRODUTOS</h1>
        <SearchBar />
        <p>Você ainda não realizou uma busca ou Chama Product Card</p>
        <ProductCard />
      </div>
    );
  }
}

export default ProductList;
