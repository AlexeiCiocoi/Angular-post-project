import { createReducer, on, Action } from '@ngrx/store';
import { IUserProfileState } from './../types/userProfile.interface';
import {
  getUserProfileAction,
  getUserProfileFailureAction,
  getUserProfileSuccessAction,
} from './actions/userProfile.actions';

const initialState: IUserProfileState = {
  data: null,
  isLoading: false,
  errors: null,
};

const userProfileReducer = createReducer(
  initialState,
  on(getUserProfileAction, (state) => ({ ...state, isLoading: true })),
  on(getUserProfileSuccessAction, (state, action) => ({
    ...state,
    isLoading: false,
    data: action.userProfile,
  })),
  on(getUserProfileFailureAction, (state) => ({
    ...state,
    isLoading: false,
    errors: 'something went wrong',
  }))
);

export function reducers(state: IUserProfileState, action: Action) {
  return userProfileReducer(state, action);
}
