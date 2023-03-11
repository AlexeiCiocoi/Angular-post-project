import { IFeedState, IGetFeedResponse } from './../types/feed.interface';
import { IAppState } from '../../types/appState.interface';
import { createSelector } from '@ngrx/store';

export const feedFeatureSelector = (state: IAppState): IFeedState => state.feed;

export const isLoadingSelector = createSelector(
  feedFeatureSelector,
  (feedState: IFeedState): boolean => feedState.isLoading
);

export const errorSelector = createSelector(
  feedFeatureSelector,
  (feedState: IFeedState): string | null => feedState.error
);

export const feedSelector = createSelector(
  feedFeatureSelector,
  (feedState: IFeedState): IGetFeedResponse | null => feedState.data
);
