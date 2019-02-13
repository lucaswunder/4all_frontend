import React, { Component } from 'react';
import NumberFormat from 'react-number-format';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TransferFavored from '../TransferFavored';

import TransfersActions from '~/store/ducks/transfers';
import CardActions from '~/store/ducks/card';

import { Container } from './styles';

class TransferSend extends Component {
  state = {
    nameReceived: '',
    cpfReceived: '',
    amountToTransfer: '',
    password: '',
    creditCardId: '',
    showCard: false,
    needPassword: false,
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAmountChange = (e) => {
    const { value } = e;
    const { balance, getCardRequest } = this.props;
    const b = parseFloat(balance);

    this.setState({
      amountToTransfer: value,
      showCard: value > b,
      needPassword: value > 1000,
    });

    if (value > b) {
      getCardRequest();
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { createTransfersRequest } = this.props;

    const {
      nameReceived, cpfReceived, amountToTransfer, password, creditCardId,
    } = this.state;

    createTransfersRequest({
      nameReceived, cpfReceived, amountToTransfer, password, creditCardId,
    });

    this.setState({
      nameReceived: '',
      cpfReceived: '',
      amountToTransfer: '',
      password: '',
      creditCardId: '',
    });
  };

  render() {
    const {
      nameReceived,
      cpfReceived,
      amountToTransfer,
      creditCardId,
      showCard,
      needPassword,
      password,
    } = this.state;

    const { cards } = this.props;

    return (
      <Container className="card">
        <header className="card-header">
          <p className="card-header-title is-centered">Send Money</p>
        </header>
        <div className="card-content">
          <form onSubmit={this.handleSubmit}>
            <div className="content">
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <p className="label">To</p>
                </div>
                <div className="field-body">
                  <div className="field">
                    <p className="control is-expanded has-icons-left">
                      <input
                        className="input"
                        type="text"
                        placeholder="Name"
                        name="nameReceived"
                        value={nameReceived}
                        onChange={this.handleInputChange}
                      />
                      <span className="icon is-small is-left">
                        <i className="fa fa-user" />
                      </span>
                    </p>
                  </div>
                  <div className="field">
                    <p className="control is-expanded has-icons-left has-icons-right">
                      <input
                        className="input is-success"
                        type="text"
                        placeholder="CPF"
                        name="cpfReceived"
                        value={cpfReceived}
                        onChange={this.handleInputChange}
                      />
                      <span className="icon is-small is-left">
                        <i className="fa fa-credit-card" />
                      </span>
                      <span className="icon is-small is-right">
                        <i className="fa fa-check" />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="field is-horizontal">
                <div className="field-label" />
                <div className="field-body">
                  <div className="field is-expanded">
                    <div className="field has-addons">
                      <div className="control">
                        <p className="button is-static">Amount R$</p>
                      </div>
                      <div className="control is-expanded">
                        <NumberFormat
                          autoComplete="off"
                          value={amountToTransfer}
                          name="amount"
                          dir="rtl"
                          className="input"
                          placeholder="Amount to Transfer"
                          thousandSeparator
                          decimalSeparator="."
                          isNumericString
                          onValueChange={this.handleAmountChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {showCard && (
                <div className="field is-horizontal">
                  <div className="field-label">
                    <p className="label">Your</p>
                  </div>
                  <div className="field-body">
                    <div className="field is-expanded">
                      <div className="field has-addons">
                        <div className="control">
                          <p className="button is-static">Credit Card</p>
                        </div>
                        <div className="control is-expanded">
                          <div className="control">
                            <div className="select is-danger is-fullwidth">
                              <select name="creditCardId" onChange={this.handleInputChange} value={creditCardId}>
                                {cards.map(card => (
                                  <option key={card.id} value={card.id}>{card.cardNumber}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <p className="help is-danger">
                            Account balance lower than the amount to be transferred, you need a
                            credit card.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {needPassword && (
                <div className="field">
                  <div className="control has-icons-left">
                    <input
                      name="password"
                      value={password}
                      onChange={this.handleInputChange}
                      className="input"
                      type="password"
                      placeholder="Password"
                    />
                    <span className="icon is-small is-left">
                      <i className="fa fa-lock" />
                    </span>
                    <p className="help is-danger">Please, enter your password.</p>
                  </div>
                </div>
              )}
              <div className="field is-horizontal">
                <div className="field-label" />
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <button type="submit" className="button is-primary">
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className="content">
            <TransferFavored />
          </div>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  balance: state.client.data.balance,
  cards: state.card.data,
  transferReg: state.transfers.transferReg,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...TransfersActions, ...CardActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TransferSend);
