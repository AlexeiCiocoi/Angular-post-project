import { IBackendErrors } from '../../../shared/types/backendError.interface';
import { IArticle } from '../../../shared/feed/types/feed.interface';
import { IArticleInput } from '../../../shared/types/article.interface';

import { ActionTypes } from '../actionTypes';
import { createAction, props } from '@ngrx/store';

export const updateArticleAction = createAction(
  ActionTypes.UPDATE_ARTICLE,
  props<{ slug: string; articleInput: IArticleInput }>()
);

export const updateArticleSuccessAction = createAction(
  ActionTypes.UPDATE_ARTICLE_SUCCESS,
  props<{ article: IArticle }>()
);

export const updateArticleFailureAction = createAction(
  ActionTypes.UPDATE_ARTICLE_FAILURE,
  props<{ errors: IBackendErrors }>()
);
