import { IArticle } from '../../../shared/feed/types/feed.interface';
import {
  updateArticleAction,
  updateArticleSuccessAction,
  updateArticleFailureAction,
} from '../actions/editArticle.action';
import { EditArticleService } from '../../services/editArticle.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';

@Injectable()
export class EditArticleEffect {
  constructor(
    private router: Router,
    private actions$: Actions,
    private editArticleService: EditArticleService
  ) {}

  updateArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateArticleAction),
      switchMap(({ articleInput, slug }) => {
        return this.editArticleService
          .updateArticle(slug, { article: articleInput })
          .pipe(
            map((article: IArticle) => {
              return updateArticleSuccessAction({ article });
            }),
            catchError((errorResponse: HttpErrorResponse) => {
              return of(
                updateArticleFailureAction({
                  errors: errorResponse.error.errors,
                })
              );
            })
          );
      })
    )
  );

  redirectAfterUpdate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateArticleSuccessAction),
        tap(({ article }) => {
          this.router.navigate(['/articles', article.slug]);
        })
      ),
    { dispatch: false }
  );
}
