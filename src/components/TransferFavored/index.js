import React from 'react';

import { Container } from './styles';

const TransferFavored = () => (
  <Container className="card">
    <header className="card-header">
      <p className="card-header-title is-centered">Message</p>
    </header>
    <div className="card-content">
      <div className="content">
        Transfer successfully made to Lucas wundervald.
        <p>Would you like to?</p>
      </div>
    </div>
    <footer className="card-footer">
      <div className="field is-grouped save-buttons">
        <div className="control">
          <button type="button" className="button is-link">
            Save as Favored
          </button>
        </div>
        <div className="control">
          <button type="button" className="button">
            Done
          </button>
        </div>
      </div>
    </footer>
  </Container>
);

export default TransferFavored;
