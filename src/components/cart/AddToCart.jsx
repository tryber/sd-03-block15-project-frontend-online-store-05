import React, { Component } from 'react';

class ButtonListing extends Component {
  constructor(props) {
    super(props);
    this.addCart = this.addCart.bind(this);
  }

  addCart() {
    const { product } = this.props;
    const getCart = JSON.parse(localStorage.getItem('listItem'));
    if (!getCart) {
      product.quantity = 1;
      return localStorage.setItem('listItem', JSON.stringify([{ ...product, total: 1 }]));
    }
    const verifyItem = getCart.find((item) => item.id === product.id);
    if (verifyItem) {
      const index = getCart.indexOf(verifyItem);
      if (verifyItem.quantity === 'undefined') getCart[index].total = 1;
      else getCart[index].total += 1;

      return localStorage.setItem('listItem', JSON.stringify(getCart));
    }
    product.quantity = 1;
    return localStorage.setItem('listItem', JSON.stringify([...getCart, { ...product, total: 1 }]));
  }

  render() {
    return (
      <button
        type="button"
        onClick={this.addCart}
        data-testid="product-add-to-cart"
        className="button-add"
      >
        Comprar
      </button>
    );
  }
}

export default ButtonListing;
