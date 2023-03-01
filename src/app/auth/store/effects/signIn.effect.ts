import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { IBackendErrors } from './../../../shared/types/backendError.interface';
import { ICurrentUser } from './../../../shared/types/currentUser.interface';
import { switchMap, catchError, map , tap } from 'rxjs/operators';
import { of } from 'rxjs';
import {
  signInAction,
  signInSuccessAction,
  signInFailureAction,
} from './../actions/signIn.action';
import { PersistanceService } from './../../../shared/services/persistance.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class SignInEffect {
  constructor(
    private router: Router,
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService
  ) {}


  logIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(signInAction),
      switchMap(({ request }) => {
        return this.authService.login(request).pipe(
          map((currentUser: ICurrentUser) => {
            this.persistanceService.set('accessToken', currentUser.token);
            return signInSuccessAction({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            console.log('error',errorResponse)
            return of(
              signInFailureAction({ errors: errorResponse.error.errors })
            );
          })
        );
      })
    )
  );

  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(signInSuccessAction),
        tap(() => {
          this.router.navigateByUrl('/');
        })
      ),
    { dispatch: false }
  );
}
