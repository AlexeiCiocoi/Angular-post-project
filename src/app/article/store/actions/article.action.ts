import { IArticle } from './../../../shared/feed/types/feed.interface';

import { ActionTypes } from '../actionTypes';
import { createAction, props } from '@ngrx/store';

export const GetArticleAction = createAction(
  ActionTypes.GET_ARTICLE,
  props<{ slug: string }>()
);

export const GetArticleSuccessAction = createAction(
  ActionTypes.GET_ARTICLE_SUCCESS,
  props<{ article: IArticle }>()
);

export const GetArticleFailureAction = createAction(
  ActionTypes.GET_ARTICLE_FAILURE
);
