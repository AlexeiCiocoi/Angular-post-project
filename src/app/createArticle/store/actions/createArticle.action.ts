import { IBackendErrors } from './../../../shared/types/backendError.interface';
import { IArticle } from './../../../shared/feed/types/feed.interface';
import { IArticleInput } from './../../../shared/types/article.interface';

import { ActionTypes } from '../actionTypes';
import { createAction, props } from '@ngrx/store';

export const createArticleAction = createAction(
  ActionTypes.CREATE_ARTICLE,
  props<{ articleInput: IArticleInput }>()
);

export const createArticleSuccessAction = createAction(
  ActionTypes.CREATE_ARTICLE_SUCCESS,
  props<{ article: IArticle }>()
);

export const createArticleFailureAction = createAction(ActionTypes.CREATE_ARTICLE_FAILURE,props<{errors: IBackendErrors}>());
