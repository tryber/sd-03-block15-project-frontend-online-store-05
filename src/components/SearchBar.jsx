import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div className="SarchBar">
        <h3> Lupa Icon </h3>
        <h1 data-testid="query-input">CAMPO PESQUISAR</h1>
        <h3 data-testid="shopping-cart-button">Botao Carrinho</h3>
      </div>
    );
  }
}

export default SearchBar;
