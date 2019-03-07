import { all, /* fork, */ takeLatest } from 'redux-saga/effects';

import { signIn, signOut, signUp } from './auth';
import { AuthTypes } from '../ducks/auth';

import { getClient } from './client';
import { ClientTypes } from '../ducks/client';

import { getTransfers, createTransfers } from './transfers';
import { TransfersTypes } from '../ducks/transfers';

import {
  getCard, createCard, updateCard, deleteCard,
} from './card';
import { CardTypes } from '../ducks/card';

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_OUT, signOut),
    takeLatest(AuthTypes.SIGN_UP_REQUEST, signUp),

    takeLatest(ClientTypes.GET_CLIENT_REQUEST, getClient),

    takeLatest(TransfersTypes.GET_TRANSFERS_REQUEST, getTransfers),
    takeLatest(TransfersTypes.CREATE_TRANSFERS_REQUEST, createTransfers),

    takeLatest(CardTypes.GET_CARD_REQUEST, getCard),
    takeLatest(CardTypes.CREATE_CARD_REQUEST, createCard),
    takeLatest(CardTypes.UPDATE_CARD_REQUEST, updateCard),
    takeLatest(CardTypes.DELETE_CARD_REQUEST, deleteCard),
  ]);
}
