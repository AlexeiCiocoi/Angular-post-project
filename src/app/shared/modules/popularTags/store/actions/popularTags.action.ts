import { IGetPopularTagsResponse, IPopularTags } from './../../types/popularTags.types';

import { ActionTypes } from '../actionTypes';
import { createAction, props } from '@ngrx/store';

export const GetPopularTagsAction = createAction(ActionTypes.GET_POPULAR_TAGS);

export const GetPopularTagsSuccessAction = createAction(
  ActionTypes.GET_POPULAR_TAGS_SUCCESS,
  props<{ popularTags: IPopularTags }>()
);

export const GetPopularTagsFailureAction = createAction(
  ActionTypes.GET_POPULAR_TAGS_FAILURE
);
