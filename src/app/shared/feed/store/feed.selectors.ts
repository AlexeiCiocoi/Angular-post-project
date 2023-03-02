import { IFeedState, IGetFeedResponse } from './../types/feed.interface';
import { IAppState } from 'src/app/shared/types/appState.interface';
import { createSelector } from '@ngrx/store';

export const feedFeatureSelector = (state: IAppState): IFeedState => state.feed;

export const isLoadingSelector = createSelector(
  feedFeatureSelector,
  (feedState: IFeedState): boolean => feedState.isLoading
);

export const errorSelector = createSelector(
  feedFeatureSelector,
  (feedState: IFeedState): string => feedState.error
);

export const feedSelector = createSelector(
  feedFeatureSelector,
  (feedState: IFeedState): IGetFeedResponse => feedState.data
);
