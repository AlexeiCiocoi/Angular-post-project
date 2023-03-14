import { IProfile } from './../../shared/feed/types/feed.interface';
import { IUserProfileState } from './../types/userProfile.interface';

import { IAppState } from 'src/app/shared/types/appState.interface';
import { createSelector } from '@ngrx/store';

export const userProfileFeatureSelector = (
  state: IAppState
): IUserProfileState => state.userProfile;

export const isLoadingSelector = createSelector(
  userProfileFeatureSelector,
  (userProfileState: IUserProfileState): boolean => userProfileState.isLoading
);

export const errorSelector = createSelector(
  userProfileFeatureSelector,
  (userProfileState: IUserProfileState): string => userProfileState.errors
);

export const userProfileSelector = createSelector(
  userProfileFeatureSelector,
  (userProfileState: IUserProfileState): IProfile => userProfileState.data
);
