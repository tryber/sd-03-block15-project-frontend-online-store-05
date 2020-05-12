import React from 'react';

class ProductList extends React.Component {
  render() {
    return (
      <div className="product-wrapper">
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default ProductList;
