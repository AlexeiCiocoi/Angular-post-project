import { IArticle } from './../../shared/feed/types/feed.interface';
import { IAppState } from '../../shared/types/appState.interface';
import { createSelector } from '@ngrx/store';
import { IBackendErrors } from '../../shared/types/backendError.interface';
import { IEditArticleState } from '../types/editArticle.interfaces';

export const createArticleFeatureSelector = (
  state: IAppState
): IEditArticleState => state.editArticle;

export const isSubmittingSelector = createSelector(
  createArticleFeatureSelector,
  (editArticleState: IEditArticleState): boolean =>
    editArticleState.isSubmitting
);
export const isLoadingSelector = createSelector(
  createArticleFeatureSelector,
  (editArticleState: IEditArticleState): boolean => editArticleState.isLoading
);
export const getArticleSelector = createSelector(
  createArticleFeatureSelector,
  (editArticleState: IEditArticleState): IArticle => editArticleState.article
);

export const updateArticleErrorsSelector = createSelector(
  createArticleFeatureSelector,
  (editArticleState: IEditArticleState) => editArticleState.errors
);
