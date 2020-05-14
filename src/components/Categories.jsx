import React, { Component } from 'react';

class Categories extends Component {
  render() {
    const { categories } = this.props;
    if (typeof categories === 'object') {
      return (
        categories.map((object) => (
          <div>
            <input
              type="radio"
              data-testid="category"
            />
            <label htmlFor={object}>{object.name}</label>
          </div>
        ))
      );
    }
    return (<li>As categorias estão sendo carregadas</li>);
  }
}

export default Categories;
