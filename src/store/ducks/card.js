import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  getCardRequest: null,
  getCardSuccess: ['data'],
  createCardRequest: ['cardNumber'],
  createCardSuccess: ['data'],
  updateCardRequest: ['data'],
  updateCardSuccess: ['data'],
  deleteCardRequest: ['id'],
});

export const CardTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  cardReg: [],
});

/* Reducers */

export const getSuccess = (state, { data }) => state.merge({ data });

export const createSuccess = (state, { data }) => state.merge({ cardReg: data });

export const updateSuccess = (state, { data }) => state.merge({ cardReg: data });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_CARD_SUCCESS]: getSuccess,
  [Types.CREATE_CARD_SUCCESS]: createSuccess,
  [Types.UPDATE_CARD_SUCCESS]: updateSuccess,
});
