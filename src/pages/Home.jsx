import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import ProductList from '../components/ListingProducts';
import './Home.css';
import * as api from '../services/api';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      searchText: '',
      categoryId: '',
      products: [],
    };
    this.searchBar = this.searchBar.bind(this);
  }

  componentDidMount() {
    api.getCategories()
      .then((categories) => this.setState({ categories }));
  }

  searchBar() {
    const { searchText, categoryId } = this.state;
    api
      .getProductsFromCategoryAndQuery(categoryId, searchText)
      .then((products) => this.setState({ products }));
  }

  render() {
    const { categories, searchText, products } = this.state;
    return (
      <div className="Home">
        <div className="Categories">
          <Categories
            categories={categories}
          />
        </div>
        <div className="Aside">
          <div className="SearchBar">
            <SearchBar
              className="SearchBar"
              searchText={searchText}
              onSearchTextChange={(e) => this.setState({ searchText: e.target.value })}
            />
          </div>
          <div className="ProductList">
            <ProductList products={products} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
