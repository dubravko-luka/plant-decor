import { SET_LOGED } from '../types/userTypes';

export const setLoged = (loged: boolean) => {
  return { type: SET_LOGED, payload: loged };
};