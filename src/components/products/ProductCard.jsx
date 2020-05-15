import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
        >
          Detalhes
        </Link>
      </div>
    );
  }
}

export default ProductCard;
