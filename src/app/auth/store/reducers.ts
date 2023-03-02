import { getCurrentUserAction, getCurrentUserActionFailed, getCurrentUserActionSuccess } from './actions/getCurrentsUser.action';
import { signInAction, signInFailureAction, signInSuccessAction } from './actions/signIn.action';
import { createReducer, on, Action } from '@ngrx/store';

import { IAuthState } from './../types/authState.interface';
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from './actions/register.action';

const initialState: IAuthState = {
  isLoading: false,
  currentUser: null,
  isLoggedIn: null,
  validationErrors: null,
};

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): IAuthState => ({
      ...state,
      isLoading: true,
      validationErrors: null,
    })
  ),
  on(
    registerSuccessAction,
    (state, action): IAuthState => ({
      ...state,
      isLoading: false,
      isLoggedIn: true,
      validationErrors: null,
      currentUser: action.currentUser,
    })
  ),
  on(
    registerFailureAction,
    (state, action): IAuthState => ({
      ...state,
      isLoading: false,
      validationErrors: action.errors,
    })
  ),
  on(
    signInAction,
    (state): IAuthState => ({
      ...state,
      isLoading: true,
      validationErrors: null,
    })
  ),
  on(
    signInSuccessAction,
    (state, action): IAuthState => ({
      ...state,
      isLoading: false,
      isLoggedIn: true,
      validationErrors: null,
      currentUser: action.currentUser,
    })
  ),
  on(
    signInFailureAction,
    (state, action): IAuthState => ({
      ...state,
      isLoading: false,
      validationErrors: action.errors,
    })
  ),
  on(
    getCurrentUserAction,
    (state): IAuthState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getCurrentUserActionSuccess,
    (state, action): IAuthState => ({
      ...state,
      isLoading: false,
      isLoggedIn: true,
      currentUser: action.currentUser,
    })
  ),
  on(
    getCurrentUserActionFailed,
    (state): IAuthState => ({
      ...state,
      isLoading: false,
      isLoggedIn: false,
      currentUser: null,
    })
  )
);

export function reducers(state: IAuthState, action: Action) {
  return authReducer(state, action);
}
