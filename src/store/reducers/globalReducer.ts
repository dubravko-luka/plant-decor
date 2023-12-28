import { LoadingAction, LoadingState, SET_COLLAPSE_SIDEBAR, SET_LOADING } from '../types/globalTypes';

const initialState: LoadingState = {
  loading: false,
  sidebarCollapse: false,
};

const globalReducer = (state = initialState, action: LoadingAction): LoadingState => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action?.payload,
      };
    case SET_COLLAPSE_SIDEBAR:
      return {
        ...state,
        sidebarCollapse: action?.payload,
      };
    default:
      return state;
  }
};

export default globalReducer;
