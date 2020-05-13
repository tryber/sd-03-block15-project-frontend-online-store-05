import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import ProductList from '../components/ListingProducts';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Categories">
          <Categories />
        </div>
        <div className="Aside">
          <div className="SearchBar">
            <SearchBar className="SearchBar" />
          </div>
          <div className="ProductList">
            <ProductList />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
