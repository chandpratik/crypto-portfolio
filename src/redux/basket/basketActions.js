import {
  FETCH_BASKET_DATA_START,
  FETCH_BASKET_DATA_SUCCESS,
  FETCH_BASKET_DATA_FAILURE,
} from './basketActionTypes';

export const fetchBasketDataStart = () => {
  return {
    type: FETCH_BASKET_DATA_START,
  };
};

export const fetchBasketDataSuccess = data => {
  return {
    type: FETCH_BASKET_DATA_SUCCESS,
    payload: data,
  };
};

export const fetchBasketDataFailure = errorMessage => {
  return {
    type: FETCH_BASKET_DATA_FAILURE,
    payload: errorMessage,
  };
};
