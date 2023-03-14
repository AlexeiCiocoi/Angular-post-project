import { IProfile } from './../../../shared/feed/types/feed.interface';
import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';

export const getUserProfileAction = createAction(
  ActionTypes.GET_USER_PROFILE,
  props<{ slug: string }>()
);
export const getUserProfileSuccessAction = createAction(
  ActionTypes.GET_USER_PROFILE_SUCCESS,
  props<{ userProfile: IProfile }>()
);
export const getUserProfileFailureAction = createAction(
  ActionTypes.GET_USER_PROFILE_FAILURE,
 
);
