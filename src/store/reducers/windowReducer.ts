import { WindowAction, WindowState, SET_WIDTH, SET_TOP, SET_HEIGHT } from '../types/windowTypes';

const initialState: WindowState = {
  width: 0,
  height: 0,
  top: -1
};

const windowReducer = (state = initialState, action: WindowAction): WindowState => {
  switch (action.type) {
    case SET_WIDTH:
      return {
        ...state,
        width: action?.payload,
      };
    case SET_HEIGHT:
      return {
        ...state,
        height: action?.payload,
      };
    case SET_TOP:
      return {
        ...state,
        top: action?.payload,
      };
    default:
      return state;
  }
};

export default windowReducer;
