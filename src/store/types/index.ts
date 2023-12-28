import { LoadingState } from './globalTypes';
import { UserState } from './userTypes';
import { WindowState } from './windowTypes';

export interface RootState {
  window: WindowState;
  global: LoadingState;
  user: UserState;
}
