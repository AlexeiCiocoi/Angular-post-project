import { IUserSettingsState } from './../types/userSettings.interface';

import { IBackendErrors } from './../../shared/types/backendError.interface';
import { createSelector } from '@ngrx/store';

import { IAppState } from 'src/app/shared/types/appState.interface';

export const userSettingsFeatureSelector = (
  state: IAppState
): IUserSettingsState => state.userSettings;

export const isSubmittingSelector = createSelector(
  userSettingsFeatureSelector,
  (userSettings: IUserSettingsState): boolean => userSettings.isSubmitting
);

export const validationErrorsSelector = createSelector(
  userSettingsFeatureSelector,
  (userSettings: IUserSettingsState): IBackendErrors =>
    userSettings.validationErrors
);
