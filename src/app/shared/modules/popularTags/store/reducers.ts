import { IPopularTagsState } from '../types/popularTags.types';

import { createReducer, on, Action } from '@ngrx/store';
import {
  GetPopularTagsAction,
  GetPopularTagsSuccessAction,
  GetPopularTagsFailureAction,
} from './actions/popularTags.action';

const initialState: IPopularTagsState = {
  isLoading: false,
  error: null,
  tags: null,
};

export const PopularTagsReducer = createReducer(
  initialState,
  on(
    GetPopularTagsAction,
    (state): IPopularTagsState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    GetPopularTagsSuccessAction,
    (state, action): IPopularTagsState => ({
      ...state,
      isLoading: false,
      tags: action.popularTags,
    })
  ),
  on(
    GetPopularTagsFailureAction,
    (state): IPopularTagsState => ({
      tags: null,
      isLoading: false,
      error: 'Something went wrong',
    })
  )
);

export function reducers(state: IPopularTagsState, action: Action) {
  return PopularTagsReducer(state, action);
}
