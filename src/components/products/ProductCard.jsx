import React, { Component } from 'react';

class ProductCard extends Component {
  render() {
    const { product } = this.props;
    const { title, price, thumbnail } = product;
    return (
      <div data-testid="product">
        <h3>{title}</h3>
        <img src={thumbnail} alt={title} />
        <p>{`Preço: ${price}`}</p>
      </div>
    );
  }
}

export default ProductCard;
