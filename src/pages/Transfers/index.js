import React, { Fragment } from 'react';

import TransferHistory from '~/components/TransferHistory';
import TransferSend from '~/components/TransferSend';

const Transfers = () => (
  <Fragment>
    <div className="columns">
      <div className="column is-6 ">
        <TransferHistory />
      </div>
      <div className="column is-6">
        <TransferSend />
      </div>
    </div>
  </Fragment>
);

export default Transfers;
