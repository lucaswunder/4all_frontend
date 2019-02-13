import React, { Component } from 'react';
import NumberFormat from 'react-number-format';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import CardActions from '~/store/ducks/card';

import { Container } from './styles';

class CreditCardSend extends Component {
  state = {
    cardNumber: '',
  };

  handleCancel = () => {
    this.clear();
  };

  clear = () => {
    const { handleSelectedCard } = this.props;
    this.setState({ cardNumber: '' });
    handleSelectedCard('', '');
  };

  handleInputChange = (e) => {
    const { handleSelectedCard, selectedCard } = this.props;

    handleSelectedCard(selectedCard.id, e.value);

    this.setState({ cardNumber: e.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { updateCardRequest, createCardRequest, selectedCard } = this.props;
    const { cardNumber } = this.state;

    if (!selectedCard.id) {
      createCardRequest(cardNumber);
    } else {
      updateCardRequest(selectedCard);
    }

    this.clear();
  };

  render() {
    const { cardNumber } = this.state;

    const { selectedCard } = this.props;

    return (
      <Container className="card">
        <header className="card-header">
          <p className="card-header-title is-centered">Link your credit card to your account</p>
        </header>
        <div className="card-content">
          <form onSubmit={this.handleSubmit}>
            <div className="content">
              <div className="field">
                <p className="label">{selectedCard.id ? 'Edit Card' : 'Register new card'}</p>
                <div className="control">
                  <NumberFormat
                    autoComplete="off"
                    value={selectedCard.id !== '' ? selectedCard.cardNumber : cardNumber}
                    name="cardNumber"
                    className="input"
                    placeholder="Card Number"
                    isNumericString
                    onValueChange={this.handleInputChange}
                  />
                </div>
                <div className="field is-grouped is-grouped-centered save-buttons">
                  <div className="control">
                    <button type="submit" className="button is-link">
                      Save
                    </button>
                  </div>
                  <div className="control">
                    <button onClick={this.handleCancel} type="button" className="button is-text">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(CardActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(CreditCardSend);
