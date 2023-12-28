import { SET_WIDTH, SET_TOP, SET_HEIGHT } from '../types/windowTypes';

export const setWidth = (width: number) => {
  return { type: SET_WIDTH, payload: width };
};

export const setHeight = (height: number) => {
  return { type: SET_HEIGHT, payload: height }
};

export const setTop = (top: number) => {
  return { type: SET_TOP, payload: top };
};