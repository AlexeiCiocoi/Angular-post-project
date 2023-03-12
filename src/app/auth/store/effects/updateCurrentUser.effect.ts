import { HttpErrorResponse } from '@angular/common/http';
import { ICurrentUser } from './../../../shared/types/currentUser.interface';
import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {
  updateUserFailureAction,
  updateUserSuccessAction,
  updateUserAction,
} from '../actions/updateCurrentUser.action';

@Injectable()
export class UpdateCurrentUserEffect {
  constructor(private actions$: Actions, private authService: AuthService) {}

  updateCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateUserAction),
      switchMap(({ currentUserInput }) => {
        return this.authService.updateCurrentUser(currentUserInput).pipe(
          map((currentUser: ICurrentUser) => {
            return updateUserSuccessAction({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            console.log('error', errorResponse);
            return of(
              updateUserFailureAction({ errors: errorResponse.error.errors })
            );
          })
        );
      })
    )
  );
}
