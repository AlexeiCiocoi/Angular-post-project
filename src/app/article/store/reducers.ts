import {
  GetArticleAction,
  GetArticleSuccessAction,
  GetArticleFailureAction,
} from './actions/article.action';
import { createReducer, on, Action } from '@ngrx/store';
import { IArticleState } from '../types/article.interface';
import { routerNavigationAction } from '@ngrx/router-store';

const initialState: IArticleState = {
  isLoading: false,
  error: null,
  article: null,
};

export const ArticleReducer = createReducer(
  initialState,
  on(
    GetArticleAction,
    (state): IArticleState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    GetArticleSuccessAction,
    (state, action): IArticleState => ({
      ...state,
      isLoading: false,
      article: action.article,
    })
  ),
  on(
    GetArticleFailureAction,
    (state): IArticleState => ({
      article: null,
      isLoading: false,
      error: 'Something went wrong',
    })
  ),
  on(routerNavigationAction, (): IArticleState => initialState)
);

export function reducers(state: IArticleState, action: Action) {
  return ArticleReducer(state, action);
}
