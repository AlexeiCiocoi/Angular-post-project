import { IArticle } from '../../../shared/feed/types/feed.interface';

import { ActionTypes } from '../actionTypes';
import { createAction, props } from '@ngrx/store';

export const getArticleAction = createAction(
  ActionTypes.GET_ARTICLE,
  props<{ slug: string }>()
);

export const getArticleSuccessAction = createAction(
  ActionTypes.GET_ARTICLE_SUCCESS,
  props<{ article: IArticle }>()
);

export const getArticleFailureAction = createAction(
  ActionTypes.GET_ARTICLE_FAILURE
);
