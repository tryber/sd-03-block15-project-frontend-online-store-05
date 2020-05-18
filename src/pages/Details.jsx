import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Home.css';
import Rating from '../components/products/Rating';

export class ProductDetail extends Component {
  render() {
    const { location: { state: { price, thumbnail, title } } } = this.props;
    return (
      <div className="Home">
        <div className="ProductList">
          <div>
            <img src={thumbnail} alt="..." />
            <h5
              data-testid="product-detail-name"
            >
              {`${title} - R$${price}`}
            </h5>
            <button type="button" data-testid="product-detail-add-to-cart">Adicionar ao carrinho</button>
            <h3>Especificações Técnicas</h3>
            <Link to="/">Voltar</Link>
            <button data-testid="shopping-cart-button" type="button">Carrinho</button>
          </div>
        </div>
        <Rating />
      </div>
    );
  }
}

export default ProductDetail;
