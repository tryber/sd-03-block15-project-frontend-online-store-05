import React from 'react';
import { Link } from 'react-router-dom';
import ListCheckout from '../components/checkout/ListCheckout';
import PaymentForm from '../components/checkout/PaymentForm';
import Header from '../css/Header';

class Checkout extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="Home">
          <ListCheckout />
          <PaymentForm />

          <div className="ButtonsCart">
            <Link to="/"><button className="styleButton" >Voltar</button></Link>
            <Link data-testid="checkout-products" to="/checkout">
              <button type="button" className="styleButton">FINALIZAR COMPRA</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;
