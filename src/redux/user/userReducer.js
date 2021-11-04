import UserActionTypes from './userTypes';

const INTIAL_STATE = {
  username: null,
  email: null,
  password: null,
};

const userReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        username: action.payload.username,
        email: action.payload.email,
        password: action.payload.password,
      };
    case UserActionTypes.REMOVER_USER:
      return {
        ...state,
        username: null,
        email: null,
        password: null,
      };
    default:
      return state;
  }
};

export default userReducer;
