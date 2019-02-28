import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

import Card from '../Card';

const Cards = ({ client }) => (
  <Container className="info-tiles">
    <div className="tile is-ancestor has-text-centered">
      <Card
        mainTitle={`R$ ${client.data.balance === null ? 0 : client.data.balance}`}
        mainSubTitle="Balance"
        buttonText="Personal Info"
        buttonLink="/account/client"
      />
      <Card
        mainTitle={`${client.data.creditCards}` || ''}
        mainSubTitle="Credit Cards"
        buttonText="View all"
        buttonLink="/account/creditcards"
      />
      <Card
        mainTitle={`${client.data.favoreds}` || ''}
        mainSubTitle="Favoreds"
        buttonText="View all"
        buttonLink="/account/favoreds"
      />
      <Card
        mainTitle={<i className="fa fa-exchange" aria-hidden="true" />}
        mainSubTitle="Transfers"
        buttonText="View all"
        buttonLink="/account/transfers"
      />
    </div>
  </Container>
);

Cards.propTypes = {
  client: PropTypes.shape().isRequired,
};

export default Cards;
