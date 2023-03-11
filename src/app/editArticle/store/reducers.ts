import {
  updateArticleAction,
  updateArticleSuccessAction,
  updateArticleFailureAction,
} from './actions/editArticle.action';
import { createReducer, on, Action } from '@ngrx/store';

import { IEditArticleState } from '../types/editArticle.interfaces';
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction,
} from './actions/getArticle.action';

const initialState: IEditArticleState = {
  isSubmitting: false,
  article: null,
  isLoading: false,
  errors: null,
};

const EditArticleReducer = createReducer(
  initialState,
  on(updateArticleAction, (state) => ({
    ...state,
    isSubmitting: true,
  })),
  on(updateArticleSuccessAction, (state) => ({
    ...state,
    isSubmitting: false,
  })),
  on(updateArticleFailureAction, (state, action) => ({
    ...state,
    isSubmitting: false,
    errors: action.errors,
  })),
  on(getArticleAction, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(getArticleSuccessAction, (state, action) => ({
    ...state,
    article: action.article,
    isLoading: false,
  })),
  on(getArticleFailureAction, (state) => ({
    ...state,
    isLoading: false,
  }))
);

export function reducers(state: IEditArticleState, action: Action) {
  return EditArticleReducer(state, action);
}
