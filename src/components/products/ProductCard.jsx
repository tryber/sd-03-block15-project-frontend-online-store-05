import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AddToCart from '../cart/AddToCart';

class ProductCard extends Component {
  render() {
    const { product } = this.props;
    const { title, price, thumbnail, id } = product;
    return (
      <div className="Card" data-testid="product">
        <p>{title}</p>
        <img src={thumbnail} alt={title} />
        <p>{`Preço: ${price}`}</p>
        <Link
          to={{ pathname: `/product/${id}`, state: { title, thumbnail, price } }}
          className="btn btn-danger"
          data-testid="product-detail-link"
          product={product}
        >
          Detalhes
        </Link>
        <div>
          <AddToCart product={product} />
        </div>
      </div>
    );
  }
}

export default ProductCard;
