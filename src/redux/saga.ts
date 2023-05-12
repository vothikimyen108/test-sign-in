import { call, put, takeEvery } from 'redux-saga/effects';
import { loginFailure, loginSuccess } from './actions';
import { login } from './services';

function* loginSaga(action: any): Generator<any, void, any> {
    try {
        console.log(action.payload)
      const response = yield call(login, action.payload.username, action.payload.password);
      yield put(loginSuccess(response));
    } catch (error: any) {
      const message = error.response?.data?.message || 'Unknown error occurred';
      yield put(loginFailure(message));
       
    }
  }

function* saga() {
  yield takeEvery('LOGIN_REQUEST', loginSaga);
}

export default saga;