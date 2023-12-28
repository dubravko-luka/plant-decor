export const SET_WIDTH = 'SET_WIDTH';
export const SET_HEIGHT = 'SET_HEIGHT';
export const SET_TOP = 'SET_TOP';

export interface WindowState {
  width: number;
  height: number;
  top: number;
}

interface setWindowWidthAction {
  type: typeof SET_WIDTH;
  payload: number;
}

interface setWindowHeightAction {
  type: typeof SET_HEIGHT;
  payload: number;
}

interface setWindowTopAction {
  type: typeof SET_TOP;
  payload: number;
}

export type WindowAction = setWindowWidthAction | setWindowHeightAction | setWindowTopAction;
