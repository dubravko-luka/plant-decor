export const SET_LOADING = 'SET_LOADING';
export const SET_COLLAPSE_SIDEBAR = 'SET_COLLAPSE_SIDEBAR';

export interface LoadingState {
  loading: boolean;
  sidebarCollapse: boolean;
}

interface setLoadingAction {
  type: typeof SET_LOADING;
  payload: boolean;
}

interface setCollapseSidebarAction {
  type: typeof SET_COLLAPSE_SIDEBAR;
  payload: boolean;
}

export type LoadingAction = setLoadingAction | setCollapseSidebarAction;
