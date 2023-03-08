import { IArticle } from '../../../shared/feed/types/feed.interface';

import { ArticleService as SharedArticleService } from '../../../shared/services/article.service';
import {
  GetArticleAction,
  GetArticleSuccessAction,
  GetArticleFailureAction,
} from '../actions/article.action';

import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';

@Injectable()
export class GetArticleEffect {
  constructor(
    private actions$: Actions,
    private articleService: SharedArticleService
  ) {}

  getArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetArticleAction),
      switchMap(({ slug }) => {
        return this.articleService.getArticle(slug).pipe(
          map((article: IArticle) => {
            return GetArticleSuccessAction({ article });
          }),
          catchError(() => {
            return of(GetArticleFailureAction());
          })
        );
      })
    )
  );
}
