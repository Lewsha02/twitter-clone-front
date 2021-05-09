import produce from 'immer';
import { LoadingState, TweetsState } from './contracts/state';

const initialState: TweetsState = {
  items: [],
  loadingState: LoadingState.NEVER
};

