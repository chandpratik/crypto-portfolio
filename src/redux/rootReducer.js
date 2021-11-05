import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from '../redux/user/userReducer';
import basketReducer from '../redux/basket/basketReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

const rootReducer = combineReducers({
  user: userReducer,
  basket: basketReducer,
});

export default persistReducer(persistConfig, rootReducer);
