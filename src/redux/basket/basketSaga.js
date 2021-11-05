import { call, takeLatest, put, all } from 'redux-saga/effects';
import { FETCH_BASKET_DATA_START } from './basketActionTypes';
import {
  fetchBasketDataSuccess,
  fetchBasketDataFailure,
} from './basketActions';
import { getBasketData } from '../../api/basketData';

export function* fetchBasketDataAsync() {
  try {
    const response = yield call(getBasketData);
    yield put(fetchBasketDataSuccess(response.data.results));
  } catch (error) {
    yield put(fetchBasketDataFailure(error.message));
  }
}

export function* fetchBasketDataStart() {
  yield takeLatest(FETCH_BASKET_DATA_START, fetchBasketDataAsync);
}

export function* fetchBasketDataSaga() {
  yield all([call(fetchBasketDataStart)]);
}
