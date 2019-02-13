import React from 'react';
import PropTypes from 'prop-types';

import LogoutButton from './Logout';

import { Container } from './styles';

const Header = ({ clientName }) => (
  <Container>
    <section className="hero is-info welcome is-small">
      <div className="hero-body">
        <div className="level">
          <div className="level-left">
            <h1 className="title is-capitalized">Hi, {clientName}</h1>
            <h2 className="subtitle"> {"We're taking care of your bills."}</h2>
          </div>
          <div className="level-right">
            <p className="level-item">
              <LogoutButton />
            </p>
          </div>
        </div>
      </div>
    </section>
  </Container>
);

Header.propTypes = {
  clientName: PropTypes.string.isRequired,
};

export default Header;
