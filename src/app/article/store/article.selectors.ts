import { IArticle } from './../../shared/feed/types/feed.interface';
import { IArticleResponse } from './../../shared/types/article.interface';
import { IArticleState} from '../types/article.interface';
import { IAppState } from 'src/app/shared/types/appState.interface';
import { createSelector } from '@ngrx/store';

export const articleFeatureSelector = (state: IAppState): IArticleState => state.article;

export const isLoadingSelector = createSelector(
  articleFeatureSelector,
  (articleState: IArticleState): boolean => articleState.isLoading
);

export const errorSelector = createSelector(
  articleFeatureSelector,
  (articleState: IArticleState): string => articleState.error
);

export const articleSelector = createSelector(
  articleFeatureSelector,
  (articleState: IArticleState): IArticle => articleState.article
);
