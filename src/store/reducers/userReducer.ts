import { UserAction, UserState, SET_LOGED } from '../types/userTypes';

const initialState: UserState = {
  loged: false,
};

const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case SET_LOGED:
      return {
        ...state,
        loged: action?.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
