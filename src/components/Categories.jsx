import React, { Component } from 'react';
import * as api from '../services/api';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = { categories: '' };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.renderCategoriesList = this.renderCategoriesList.bind(this);
  }

  componentDidMount() {
    api.getCategories()
      .then((results) => this.setState({ categories: results }));
  }

  renderCategoriesList() {
    const { onChange } = this.props;
    const { categories } = this.state;
    if (typeof categories === 'object') {
      return categories.map((object) => (
        <div key={object.name}>
          <input
            type="radio"
            data-testid="category"
            id={object.name}
            onChange={() => onChange(object.id)}
            name="category"
          />
          <label htmlFor={object.name}>{object.name}</label>
        </div>
      ));
    }
    return (<li>As categorias estão sendo carregadas</li>);
  }

  render() {
    return (
      <div>
        <h1>Categorias:</h1>
        {this.renderCategoriesList()}
      </div>
    );
  }
}

export default Categories;
