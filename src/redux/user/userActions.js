import UserActionTypes from './userTypes';

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const removeUser = () => ({
  type: UserActionTypes.REMOVER_USER,
});
