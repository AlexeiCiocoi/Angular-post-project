import { Router } from '@angular/router';

import {
  deleteArticleAction,
  deleteArticleSuccessAction,
  deleteArticleFailureAction,
} from '../actions/deleteArticle.action';

import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { ArticleService } from '../../services/article.service';

@Injectable()
export class DeleteArticleEffect {
  constructor(
    private router: Router,
    private actions$: Actions,
    private articleService: ArticleService
  ) {}

  deleteArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteArticleAction),
      switchMap(({ slug }) => {
        return this.articleService.deleteArticle(slug).pipe(
          map(() => {
            return deleteArticleSuccessAction();
          }),
          catchError(() => {
            return of(deleteArticleFailureAction());
          })
        );
      })
    )
  );

  redirectAfterDelete$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(deleteArticleSuccessAction),
        tap(() => {
          this.router.navigate(['/']);
        })
      ),
    { dispatch: false }
  );
}
