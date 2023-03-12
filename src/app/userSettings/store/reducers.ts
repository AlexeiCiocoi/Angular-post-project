import {
  updateUserAction,
  updateUserSuccessAction,
  updateUserFailureAction,
} from './../../auth/store/actions/updateCurrentUser.action';
import { createReducer, on, Action } from '@ngrx/store';
import { IUserSettingsState } from '../types/userSettings.interface';

const initialState: IUserSettingsState = {
  isSubmitting: false,
  validationErrors: null,
};

const userSettingsReducer = createReducer(
  initialState,
  on(
    updateUserAction,
    (state): IUserSettingsState => ({
      ...state,
      isSubmitting: true,
    })
  ),
  on(
    updateUserSuccessAction,
    (state): IUserSettingsState => ({
      ...state,
      isSubmitting: false,
    })
  ),
  on(
    updateUserFailureAction,
    (state, action): IUserSettingsState => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  )
);

export function reducers(state: IUserSettingsState, action: Action) {
  return userSettingsReducer(state, action);
}
