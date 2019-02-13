import { call, put } from 'redux-saga/effects';
import api from '~/services/api';
import toastrActions from 'react-redux-toastr';

import ClientActions from '../ducks/client';

export function* getClient() {
  try {
    const response = yield call(api.get, 'account/client');
    yield put(ClientActions.getClientSuccess(response.data));
  } catch (err) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Get Client Failed',
        message: err.response.data.error,
      }),
    );
  }
}
