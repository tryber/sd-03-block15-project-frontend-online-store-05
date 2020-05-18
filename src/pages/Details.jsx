import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Rating from '../components/products/Rating';
import Header from '../css/Header';

export class ProductDetail extends Component {
  render() {
    const { location: { state: { price, thumbnail, title } } } = this.props;
    return (
      <div className="App">
        <Header />
        <div className="Details">
          <div className="DetailsContent">
            <div>
              <h4>{`${title}`}</h4>
              <img src={thumbnail} alt="..." />
              <h5
                data-testid="product-detail-name"
              >
                {`Valor do Produto : R$${price}`}
              </h5>
              <h3>Especificações Técnicas</h3>
            </div>
            <div className="Rating">
              <Rating />
              <Link to="/"><button className="styleButton" >Voltar</button></Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
