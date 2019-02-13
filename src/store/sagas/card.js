import { call, put } from 'redux-saga/effects';
import api from '~/services/api';
import { actions as toastrActions } from 'react-redux-toastr';

import CardActions from '../ducks/card';
import ClientActions from '../ducks/client';

export function* getCard() {
  try {
    const response = yield call(api.get, 'account/creditcard');

    yield put(CardActions.getCardSuccess(response.data));
  } catch (err) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Credit Card',
        message: err.response.data,
      }),
    );
  }
}

export function* createCard(cardNumber) {
  try {
    const response = yield call(api.post, '/account/creditcard', cardNumber);

    yield put(CardActions.createCardSuccess(response.data));

    yield put(ClientActions.getClientRequest());

    yield put(
      toastrActions.add({
        type: 'success',
        title: 'Credit Card',
        message: 'Card Created',
      }),
    );

    yield put(CardActions.getCardRequest());
  } catch (err) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Credit Card',
        message: err.response.data.error,
      }),
    );
  }
}

export function* updateCard({ data }) {
  try {
    const { id, cardNumber } = data;
    yield call(api.put, '/account/creditcard', { id, cardNumber });

    yield put(CardActions.getCardRequest());

    yield put(
      toastrActions.add({
        type: 'success',
        title: 'Credit Card',
        message: 'Number Updated',
      }),
    );
  } catch (err) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Credit Card',
        message: err.response.data.error,
      }),
    );
  }
}

export function* deleteCard({ id }) {
  try {
    yield call(api.delete, `/account/creditcard/${id}`);

    yield put(CardActions.getCardRequest());

    yield put(
      toastrActions.add({
        type: 'success',
        title: 'Credit Card',
        message: 'Card deleted',
      }),
    );
  } catch (err) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Credit Card',
        message: err.response.data.error,
      }),
    );
  }
}
