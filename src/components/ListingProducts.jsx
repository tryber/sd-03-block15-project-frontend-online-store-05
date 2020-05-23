import React, { Component } from 'react';
import ProductCard from './products/ProductCard';

class ProductList extends Component {
  render() {
    const { products } = this.props;
    return (
      <div className="ProductList">
        {products.map((product) => <ProductCard product={product} />)}
      </div>
    );
  }
}

export default ProductList;
