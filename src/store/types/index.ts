import { LoadingState } from './globalTypes';
import { WindowState } from './windowTypes';

export interface RootState {
  window: WindowState;
  global: LoadingState;
}
