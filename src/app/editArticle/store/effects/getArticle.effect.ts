import { IArticle } from '../../../shared/feed/types/feed.interface';
import {
  getArticleAction,
  getArticleSuccessAction,
  getArticleFailureAction,
} from '../actions/getArticle.action';
import { ArticleService as SharedArticleService } from 'src/app/shared/services/article.service';

import { HttpErrorResponse } from '@angular/common/http';

import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';

@Injectable()
export class GetArticleEffect {
  constructor(
    private actions$: Actions,
    private getArticleService: SharedArticleService
  ) {}

  getArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getArticleAction),
      switchMap(({ slug }) => {
        return this.getArticleService.getArticle(slug).pipe(
          map((article: IArticle) => {
            return getArticleSuccessAction({ article });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getArticleFailureAction());
          })
        );
      })
    )
  );
}
