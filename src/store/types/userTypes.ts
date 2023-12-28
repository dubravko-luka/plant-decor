export const SET_LOGED = 'SET_LOGED';

export interface UserState {
  loged: boolean;
}

interface setLogedAction {
  type: typeof SET_LOGED;
  payload: boolean;
}

export type UserAction = setLogedAction;
