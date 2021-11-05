import {
  FETCH_BASKET_DATA_START,
  FETCH_BASKET_DATA_SUCCESS,
  FETCH_BASKET_DATA_FAILURE,
} from './basketActionTypes';

const initialState = {
  basketData: null,
  loading: true,
  errorMessage: null,
};

const basketReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_BASKET_DATA_START:
      return { ...state, loading: true };
    case FETCH_BASKET_DATA_SUCCESS:
      return { ...state, basketData: payload, loading: false };
    case FETCH_BASKET_DATA_FAILURE:
      return { ...state, loading: false, errorMessage: action.payload };
    default:
      return state;
  }
};

export default basketReducer;
