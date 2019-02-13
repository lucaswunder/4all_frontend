import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Route, Switch, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ClientActions from '~/store/ducks/client';

import Header from '~/components/Header';
import Cards from '~/components/Cards';
import Transfers from '~/pages/Transfers';
import CreditCards from '~/pages/Creditcards';
import Client from '~/pages/Client';

import { Container } from './styles';

class Main extends Component {
  static propTypes = {
    getClientRequest: PropTypes.func.isRequired,
    client: PropTypes.shape().isRequired,
  };

  componentDidMount() {
    const { getClientRequest } = this.props;
    getClientRequest();
  }

  render() {
    const { client } = this.props;
    return (
      <Container>
        {client !== null && (
        <div className="container">
          <div className="columns">
            <div className="column is-12">
              <Header clientName={client.data.name || ''} />
              <Cards client={client} />
              <Switch>
                <Route path="/account/transfers" component={Transfers} />
                <Route path="/account/creditcards" component={CreditCards} />
                <Route path="/account/client" render={props => <Client {...props} client={client} />} />
                <Redirect from="/account/*" to="/account" />
              </Switch>
            </div>
          </div>
        </div>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  client: state.client,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...ClientActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
