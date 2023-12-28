import { SET_COLLAPSE_SIDEBAR, SET_LOADING } from '../types/globalTypes';

export const setLoading = (loading: boolean) => {
  return { type: SET_LOADING, payload: loading };
};

export const setCollapseSidebar = (collapse: boolean) => {
  return {
    type: SET_COLLAPSE_SIDEBAR,
    payload: collapse,
  };
};