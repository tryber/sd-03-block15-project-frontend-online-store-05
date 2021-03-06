import React, { Component } from 'react';
import * as api from '../services/api';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import ProductList from '../components/ListingProducts';
import '../Home.css';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedCategory: null, products: null };
    this.selectCategoryAndSearch = this.selectCategoryAndSearch.bind(this);
    this.searchProducts = this.searchProducts.bind(this);
  }

  selectCategoryAndSearch(id) {
    this.setState({ selectedCategory: id });
    api.getProductsFromCategoryAndQuery(id, '')
      .then((products) => this.setState({ products: products.results }));
  }

  searchProducts(query) {
    const { selectedCategory } = this.state;
    api.getProductsFromCategoryAndQuery(selectedCategory, query)
      .then((products) => this.setState({ products: products.results }));
  }

  render() {
    const { products } = this.state;
    return (
      <div className="Home">
        <div className="Categories">
          <Categories onChange={this.selectCategoryAndSearch} />
        </div>
        <div className="Aside">
          <div className="SearchBar">
            <SearchBar className="SearchBar" onChange={this.searchProducts} />
          </div>
          <div className="ProductList">
            {products !== null
              ? <ProductList products={products} />
              : (
                <p
                  data-testid="home-initial-message"
                >
                  Digite algum termo de pesquisa ou escolha uma categoria.
                </p>
              )}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
