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
      return categories.map((object) => (
        <div>
          <input type="radio" data-testid="category" id={object.name} key={object.name} />
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
