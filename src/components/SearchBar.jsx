import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { queryText: null };
  }

  textInputChangeHandler(value) {
    this.setState({ queryText: value });
  }

  render() {
    const { onChange } = this.props;
    const { queryText } = this.state;
    return (
      <div className="SarchBar">
        <h3> Lupa Icon </h3>
        <input
          data-testid="query-input"
          type="text"
          onChange={(e) => this.textInputChangeHandler(e.target.value)}
        />
        <button
          data-testid="query-button"
          type="submit"
          onClick={() => onChange(queryText)}
        >
          Pesquisar
        </button>
        <Link
          to="/Shop"
          data-testid="shopping-cart-button"
        >
          Carrinho Button
        </Link>
      </div>
    );
  }
}

export default SearchBar;
