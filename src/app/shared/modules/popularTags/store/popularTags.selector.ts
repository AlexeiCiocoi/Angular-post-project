import { IPopularTagsState, IPopularTags } from './../types/popularTags.types';

import { createSelector } from '@ngrx/store';
import { IAppState } from 'src/app/shared/types/appState.interface';

export const popularTagsFeatureSelector = (
  state: IAppState
): IPopularTagsState => state.popularTags;

export const loadingPopularTagsSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState: IPopularTagsState): boolean => popularTagsState.isLoading
);

export const popularTagsErrorSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState: IPopularTagsState): string => popularTagsState.error
);

export const popularTagsSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState: IPopularTagsState): IPopularTags => popularTagsState.tags
);
