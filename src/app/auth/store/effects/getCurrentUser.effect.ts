import {
  getCurrentUserAction,
  getCurrentUserActionSuccess,
  getCurrentUserActionFailed,
} from './../actions/getCurrentsUser.action';
import { HttpErrorResponse } from '@angular/common/http';
import { ICurrentUser } from './../../../shared/types/currentUser.interface';
import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { PersistanceService } from './../../../shared/services/persistance.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class GetCurrentUserEffect {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService
  ) {}

  getCurrentUSer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrentUserAction),
      switchMap(() => {
        const token = this.persistanceService.get('accessToken');
        if (!token) return of(getCurrentUserActionFailed());
        return this.authService.getCurrentUser().pipe(
          map((currentUser: ICurrentUser) => {
            return getCurrentUserActionSuccess({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getCurrentUserActionFailed());
          })
        );
      })
    )
  );
}
