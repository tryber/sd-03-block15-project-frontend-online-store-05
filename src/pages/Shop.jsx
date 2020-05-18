import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Home.css';
import ItemsOfCart from '../components/cart/ItemsOfCart';


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
          <Link to="/">Voltar</Link>
          <Link data-testid="checkout-products" to="/checkout">
            <button type="button">FINALIZAR COMPRA</button>
          </Link>
        </div>
      );
    }
    return (
      <div className="Shop" data-testid="shopping-cart-button">
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        <Link to="/">Voltar</Link>
      </div>
    );
  }
}

export default Shop;
