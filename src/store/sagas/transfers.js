import { call, put, select } from 'redux-saga/effects';
import api from '~/services/api';
import { actions as toastrActions } from 'react-redux-toastr';

import TransfersActions from '../ducks/transfers';
import ClientActions from '~/store/ducks/client';

export function* getTransfers() {
  try {
    let response = [];

    const option = yield select(state => state.transfers.option);
    if (option === 'SEND') response = yield call(api.get, 'account/transaction/send');

    if (option === 'RECEIVED') response = yield call(api.get, 'account/transaction/received');

    yield put(TransfersActions.getTransfersSuccess(response.data));
  } catch (err) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Get history failed',
        message: err.response.data,
      }),
    );
  }
}

export function* createTransfers({ data }) {
  try {
    const response = yield call(api.post, '/account/transaction', data);

    yield put(TransfersActions.createTransfersSuccess(response.data));

    yield put(
      toastrActions.add({
        type: 'success',
        title: 'Money sent',
        message: `Transfer Sent to ${data.nameReceived}`,
      }),
    );

    yield put(TransfersActions.getTransfersRequest());
    yield put(ClientActions.getClientRequest());
  } catch (err) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Not Sent',
        message: err.response.data.error,
      }),
    );
  }
}
