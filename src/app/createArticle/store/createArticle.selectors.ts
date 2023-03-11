import { IAppState } from '../../shared/types/appState.interface';
import { createSelector } from '@ngrx/store';
import { IBackendErrors } from '../../shared/types/backendError.interface';
import { ICreateArticleState } from '../types/createArticle.interfaces';

export const createArticleFeatureSelector = (
  state: IAppState
): ICreateArticleState => state.createArticle;

export const isSubmittingSelector = createSelector(
  createArticleFeatureSelector,
  (createArticleState: ICreateArticleState): boolean =>
    createArticleState.isSubmitting
);

export const createArticleErrorsSelector = createSelector(
  createArticleFeatureSelector,
  (createArticleState: ICreateArticleState): IBackendErrors | null =>
    createArticleState.errors
);
