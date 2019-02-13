import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { reducer as toastr } from 'react-redux-toastr';
import { reducer as auth } from './auth';
import { reducer as client } from './client';
import { reducer as transfers } from './transfers';
import { reducer as card } from './card';

export default history => combineReducers({
  auth,
  client,
  transfers,
  card,
  toastr,
  router: connectRouter(history),
});
