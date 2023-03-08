import { IArticle } from './../../../shared/feed/types/feed.interface';
import { createArticleAction, createArticleSuccessAction, createArticleFailureAction } from './../actions/createArticle.action';
import { CreateArticleService } from './../../services/createArticle.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { IBackendErrors } from './../../../shared/types/backendError.interface';

import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { PersistanceService } from './../../../shared/services/persistance.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';


@Injectable()
export class CreateArticleEffect {
  constructor(
    private router: Router,
    private actions$: Actions,
    private createArticleService: CreateArticleService,
    private persistanceService: PersistanceService
  ) {}

  createArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createArticleAction),
      switchMap(({ articleInput }) => {
        return this.createArticleService.createArticle(articleInput).pipe(
          map((article: IArticle) => {
            // this.persistanceService.set('accessToken', currentUser.token);
            return createArticleSuccessAction({ article });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
           
            return of(
              createArticleFailureAction({ errors: errorResponse.error.errors })
            );
          })
        );
      })
    )
  );

  redirectAfterCreate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createArticleSuccessAction),
        tap(({article}) => {
          this.router.navigate(['/article',article.slug]);
        })
      ),
    { dispatch: false }
  );
}
