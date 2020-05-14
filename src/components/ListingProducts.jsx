import React, { Component } from 'react';
import ProductCard from './products/ProductCard';

class ProductList extends Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        {products.map((product, i) => <ProductCard key={i} product={product} />)}
      </div>
    );
  }
}

export default ProductList;
