import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  signInRequest: ['cpf', 'password'],
  signInSuccess: ['token'],
  signOut: null,
  signUpRequest: ['name', 'cpf', 'password', 'fone'],
});

export const AuthTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  signedIn: !!localStorage.getItem('@4allEkky:token'),
  token: localStorage.getItem('@4allEkky:token') || null,
});

/* Reducers */

export const success = (state, { token }) => state.merge({ signedIn: true, token });

export const logout = state => state.merge({ signedIn: false, token: null });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_SUCCESS]: success,
  [Types.SIGN_OUT]: logout,
  // [Types.GET_PERMISSIONS_SUCCESS]: permissionsSuccess,
});
