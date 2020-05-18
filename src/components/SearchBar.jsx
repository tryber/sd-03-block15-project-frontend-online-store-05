import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import cart_logo from '../img/cart_logo.png';


const StyledButton = withStyles({
  root: {
    background: 'linear-gradient(162deg, rgba(26,214,152,1) 5%, rgba(35,233,204,1) 71%, rgba(84,222,236,1) 100%)',
    borderRadius: 5,
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin: '4px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: { textTransform: 'capitalize' },
})(Button);

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
        <TextField
          label="Procurar"
          id="outlined-size-normal"
          defaultValue="Escreva..."
          variant="outlined"
          className="InputClass"
          data-testid="query-input"
          type="text"
          onChange={(e) => this.textInputChangeHandler(e.target.value)}
        />
        <StyledButton
          data-testid="query-button"
          type="submit"
          onClick={() => onChange(queryText)}
        >
          Pesquisar
        </StyledButton>
        <Link
          data-testid="shopping-cart-button"
          to="/Shop"
        >
          <img className="CartLogo" src={cart_logo} alt="logo" />
        </Link>
      </div>
    );
  }
}

export default SearchBar;
