import { IBackendErrors } from './../../../shared/types/backendError.interface';
import { IUserRegisterRequest } from './../../types/authResponse.interface';
import { ICurrentUser } from './../../../shared/types/currentUser.interface';
import { createAction, props } from '@ngrx/store';

import { ActionTypes } from './../actionTypes';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ request: IUserRegisterRequest }>()
);
export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{ currentUser: ICurrentUser }>()
);
export const registerFailureAction = createAction(
  ActionTypes.REGISTER_FAILURE,
  props<{ errors: IBackendErrors }>()
);
