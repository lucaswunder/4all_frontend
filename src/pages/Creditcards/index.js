import React, { Component, Fragment } from 'react';

import CreditCardList from '../../components/CreditCardList';
import CreditCardSend from '../../components/CreditCardSend';

class Creditcards extends Component {
  state = {
    selectedCard: [
      {
        id: '',
        cardNumber: '',
      },
    ],
  };

  handleSelectedChange = (id, cardNumber) => {
    this.setState({ selectedCard: { id, cardNumber } });
  };

  render() {
    const { selectedCard } = this.state;
    return (
      <Fragment>
        <div className="columns">
          <div className="column is-6 ">
            <CreditCardList handleSelectedCard={this.handleSelectedChange} />
          </div>
          <div className="column is-6">
            <CreditCardSend
              selectedCard={selectedCard}
              handleSelectedCard={this.handleSelectedChange}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Creditcards;
