import { ISignIn } from './../../types/signIn.interface';
import { IBackendErrors } from './../../../shared/types/backendError.interface';
import { ICurrentUser } from './../../../shared/types/currentUser.interface';
import { ActionTypes } from './../actionTypes';
import { createAction, props } from '@ngrx/store';

export const signInAction = createAction(ActionTypes.SIGN_IN,
  props<{request: ISignIn}>()
  );

export const signInSuccessAction = createAction(
  ActionTypes.SIGN_IN_SUCCESS,
  props<{ currentUser: ICurrentUser }>()
);

export const signInFailureAction = createAction(
  ActionTypes.SIGN_IN_FAILURE,
  props<{ errors: IBackendErrors }>()
);
