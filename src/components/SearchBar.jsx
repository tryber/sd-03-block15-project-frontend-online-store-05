import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <div className="SarchBar">
        <h3> Lupa Icon </h3>
        <input
          id="search-input"
          type="search"
          placeholder="Search"
          aria-label="Search"
          data-testid="query-input"
          value={searchText}
          onChange={onSearchTextChange}
        />
        <button
          type="submit"
          data-testid="query-button"
        >
          Botao
        </button>
        <Link to="/Shop">
          <h3 data-testid="shopping-cart-button">Botao Carrinho</h3>
        </Link>
      </div>
    );
  }
}

export default SearchBar;
