import React from 'react';
import { Link } from 'react-router-dom';
import ListCheckout from '../components/checkout/ListCheckout';
import PaymentForm from '../components/checkout/PaymentForm';

class Checkout extends React.Component {
  render() {
    return (
      <div>
        <ListCheckout />
        <PaymentForm />
        <button type="button">Finalizar Compra </button>
        <Link to="/">Voltar</Link>
      </div>
    );
  }
}

export default Checkout;
