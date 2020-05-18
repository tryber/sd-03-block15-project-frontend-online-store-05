import React from 'react';

class ListCheckout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { total: 0 };
  }

  componentDidMount() {
    const storage = JSON.parse(localStorage.getItem('listItem'));
    if (storage && (storage.length !== 0)) {
      this.renderTotal();
    }
  }

  calculateTotal(total, price) {
    const finalValue = total * price;
    this.setState((state) => ({ total: state.total + finalValue }));
  }

  renderTotal() {
    const storage = JSON.parse(localStorage.getItem('listItem'));
    const FinalValue = (storage.reduce((sum, e) => (sum + (e.total * e.price)), 0).toFixed(2));
    this.setState(() => ({ total: FinalValue }));
  }

  render() {
    const storage = JSON.parse(localStorage.getItem('listItem'));
    const { total } = this.state;
    if (storage && (storage.length !== 0)) {
      return (
        <div>
          <div>
            {storage.map((e) => (
              <div key={e.title}>
                <div>
                  <span>{e.title}</span>
                  <span>{e.total}</span>
                  <span>{e.price}</span>
                </div>
              </div>
            ))}
            <span>Total</span>
            <span>{total}</span>
          </div>
          <div>
            <form className="Form">
              <label htmlFor="fullname">
                Nome Completo:
                <input data-testid="checkout-fullname" />
              </label>
              <label htmlFor="email">
                Email:
                <input data-testid="checkout-email" />
              </label>
              <label htmlFor="cpf">
                CPF:
                <input data-testid="checkout-cpf" />
              </label>
              <label htmlFor="phone">
                Telefone:
                <input data-testid="checkout-phone" />
              </label>
              <label htmlFor="cep">
                CEP:
                <input data-testid="checkout-cep" />
              </label>
              <label htmlFor="address">
                Endereço:
                <input data-testid="checkout-address" />
              </label>
            </form>
          </div>
        </div>
      );
    }
    return (
      <div>
        <h1>Você não escolheu nenhum produto!</h1>
      </div>
    );
  }
}

export default ListCheckout;
