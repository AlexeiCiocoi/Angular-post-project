import { IGetFeedResponse } from './../../types/feed.interface';
import { ActionTypes } from '../actionTypes';
import { createAction, props } from '@ngrx/store';

export const GetFeedAction = createAction(
  ActionTypes.GET_FEED,
  props<{ url: string }>()
);

export const GetFeedSuccessAction = createAction(
  ActionTypes.GET_FEED_SUCCESS,
  props<{ feed: IGetFeedResponse }>()
);

export const GetFeedFailureAction = createAction(ActionTypes.GET_FEED_FAILURE);
