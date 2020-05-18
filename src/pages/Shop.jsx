import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ItemsOfCart from '../components/cart/ItemsOfCart';
import Header from '../css/Header';

class Shop extends Component {
  constructor(props) {
    super(props);
    const products = JSON.parse(localStorage.getItem('listItem'));
    this.state = { listOfItems: products };
  }

  componentDidMount() {
    const { listOfItems } = this.state;
    localStorage.setItem('listItem', JSON.stringify(listOfItems));
    if (listOfItems) {
      const totalItems = 1;
      localStorage.setItem('totalItems', totalItems);
    }
  }

  render() {
    const { listOfItems } = this.state;
    if (listOfItems && (listOfItems.length !== 0)) {
      return (
        <div className="App">
          <Header />
          <div className="ButtonsCart">
            <Link to="/"><button className="styleButton" >Voltar</button></Link>
            <Link data-testid="checkout-products" to="/checkout">
              <button type="button" className="styleButton">FINALIZAR COMPRA</button>
            </Link>
          </div>
          <div className="Cart">
            {listOfItems.map((e) => (
              <ItemsOfCart
                key={e.title}
                price={e.price}
                quantity={e.available_quantity}
                thumbnail={e.thumbnail}
                title={e.title}
                total={e.total}
              />
            ))}
          </div>
        </div>
      );
    }
    return (
      <div className="App">
        <Header />
        <div className="Shop" data-testid="shopping-cart-button">
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          <Link to="/">Voltar</Link>
        </div>
      </div>
    );
  }
}

export default Shop;
