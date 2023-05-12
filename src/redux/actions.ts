import { LOGIN_REQUEST, LOGIN_RESPONSE, LOGIN_FAILURE } from './constants';

export const loginRequest = (payload: any) => ({
  type: LOGIN_REQUEST,
  payload,
});

export const loginSuccess = (payload: any) => ({
  type: LOGIN_RESPONSE,
  payload,
});

export const loginFailure = (payload: any) => ({
  type: LOGIN_FAILURE,
  payload,
});