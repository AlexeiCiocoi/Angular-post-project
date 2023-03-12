
import { IBackendErrors } from './../../../shared/types/backendError.interface';
import { ICurrentUser, ICurrentUserInput } from './../../../shared/types/currentUser.interface';
import { ActionTypes } from './../actionTypes';
import { createAction, props } from '@ngrx/store';

export const updateUserAction = createAction(
  ActionTypes.UPDATE_CURRENT_USER,
  props<{ currentUserInput: ICurrentUserInput }>()
);

export const updateUserSuccessAction = createAction(
  ActionTypes.UPDATE_CURRENT_USER_SUCCESS,
  props<{ currentUser: ICurrentUser }>()
);

export const updateUserFailureAction = createAction(
  ActionTypes.UPDATE_CURRENT_USER_FAILURE,
  props<{ errors: IBackendErrors }>()
);
