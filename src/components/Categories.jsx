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
    const { categories } = this.state;
    api.getCategories()
      .then((results) => this.setState({ categories: results }))
      .then(() => console.log(categories));
  }

  renderCategoriesList() {
    const { categories } = this.state;
    if (typeof categories === 'object') {
      return categories.map((object) => <li key={object.name}>{object.name}</li>);
    }
    return (<li>Carregando Categorias</li>);
  }

  render() {
    return (
      <div>
        <h1 data-testid="category">Categorias:</h1>
        <ul>
          {this.renderCategoriesList()}
        </ul>
      </div>
    );
  }
}

export default Categories;
