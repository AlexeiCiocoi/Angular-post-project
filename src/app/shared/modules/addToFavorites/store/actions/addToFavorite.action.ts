import { IArticle } from '../../../../feed/types/feed.interface';
import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';

export const addToFavoriteAction = createAction(
  ActionTypes.ADD_TO_FAVORITES,
  props<{ isFavorite: boolean; slug: string }>()
);

export const addToFavoriteSuccessAction = createAction(
  ActionTypes.ADD_TO_FAVORITES_SUCCESS,
  props<{ article: IArticle }>()
);
export const addToFavoriteFailureAction = createAction(
  ActionTypes.ADD_TO_FAVORITES_FAILURE
);
