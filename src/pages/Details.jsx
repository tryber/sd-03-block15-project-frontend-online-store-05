import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
            <h3>Especificações Técnicas</h3>
            <Link to="/">Voltar</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
