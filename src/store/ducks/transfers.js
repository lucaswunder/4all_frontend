import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  getTransfersRequest: null,
  getTransfersSuccess: ['data'],
  createTransfersRequest: ['data'],
  createTransfersSuccess: ['data'],
  setOption: ['option'],
});

export const TransfersTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  addFavored: false,
  transferReg: [],
  option: ['SEND'],
});

/* Reducers */

export const getSuccess = (state, { data }) => state.merge({ data });

export const createSuccess = (state, { data }) => state.merge({ transferReg: data });

export const setOption = (state, { option }) => state.merge({ option });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_TRANSFERS_SUCCESS]: getSuccess,
  [Types.CREATE_TRANSFERS_SUCCESS]: createSuccess,
  [Types.SET_OPTION]: setOption,
});
