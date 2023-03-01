import { PersistanceService } from './../../../shared/services/persistance.service';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { ICurrentUser } from 'src/app/shared/types/currentUser.interface';
import { AuthService } from '../../services/auth.service';
import {
  registerAction,
  registerSuccessAction,
  registerFailureAction,
} from './../actions/register.action';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class RegisterEffect {
  constructor(
    private router: Router,
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService
  ) {}

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ request }) => {
        return this.authService.register(request).pipe(
          map((currentUser: ICurrentUser) => {
            this.persistanceService.set('accessToken', currentUser.token);
            return registerSuccessAction({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              registerFailureAction({ errors: errorResponse.error.errors })
            );
          })
        );
      })
    )
  );

  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerSuccessAction),
        tap(() => {
          this.router.navigateByUrl('/');
        })
      ),
    { dispatch: false }
  );
}
