import {
  createArticleAction,
  createArticleSuccessAction,
  createArticleFailureAction,
} from './actions/createArticle.action';
import { createReducer, on, Action } from '@ngrx/store';

import { ICreateArticleState } from './../types/createArticle.interfaces';

const initialSTate: ICreateArticleState = {
  isSubmitting: false,
  errors: null,
};

const CreateArticleReducer = createReducer(
  initialSTate,
  on(createArticleAction, (state) => ({
    ...state,
    isSubmitting: true,
  })),
  on(createArticleSuccessAction, (state) => ({
    ...state,
    isSubmitting: false,
  })),
  on(createArticleFailureAction, (state, action) => ({
    ...state,
    isSubmitting: false,
    errors: action.errors,
  }))
);

export function reducers(state: ICreateArticleState, action: Action) {
  return CreateArticleReducer(state, action);
}
