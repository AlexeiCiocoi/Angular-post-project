import { ICurrentUser } from './../../../shared/types/currentUser.interface';
import { ActionTypes } from '../actionTypes';
import { createAction, props } from '@ngrx/store';

export const getCurrentUserAction = createAction(ActionTypes.GET_CURRENT_USER);

export const getCurrentUserActionSuccess = createAction(
  ActionTypes.GET_CURRENT_USER_SUCCESS,
  props<{ currentUser: ICurrentUser }>()
);

export const getCurrentUserActionFailed = createAction(ActionTypes.GET_CURRENT_USER_FAILURE);
