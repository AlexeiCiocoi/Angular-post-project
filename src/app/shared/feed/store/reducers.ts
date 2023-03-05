import {
  GetFeedAction,
  GetFeedFailureAction,
  GetFeedSuccessAction,
} from './actions/getFeed.action';
import { createReducer, on, Action } from '@ngrx/store';
import { IFeedState } from './../types/feed.interface';
import { routerNavigationAction } from '@ngrx/router-store';

const initialState: IFeedState = {
  isLoading: false,
  error: null,
  data: null,
};

export const FeedReducer = createReducer(
  initialState,
  on(
    GetFeedAction,
    (state): IFeedState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    GetFeedSuccessAction,
    (state, action): IFeedState => ({
      ...state,
      isLoading: false,
      data: action.feed,
    })
  ),
  on(
    GetFeedFailureAction,
    (state): IFeedState => ({
      data: null,
      isLoading: false,
      error: 'Something went wrong',
    })
  ),
  on(routerNavigationAction, (): IFeedState => initialState)
);

export function reducers(state: IFeedState, action: Action) {
  return FeedReducer(state, action);
}
