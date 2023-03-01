import { IBackendErrors } from './../../shared/types/backendError.interface';
import { createSelector } from '@ngrx/store';

import { IAppState } from 'src/app/shared/types/appState.interface';
import { IAuthState } from '../types/authState.interface';

export const authFeatureSelector = (state: IAppState): IAuthState => state.auth;

export const isLoadingSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthState): boolean => authState.isLoading
);

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthState): IBackendErrors => authState.validationErrors
);

