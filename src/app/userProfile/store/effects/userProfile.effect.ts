import { IProfile } from './../../../shared/feed/types/feed.interface';
import { UserProfileService } from './../../services/userProfile.service';

import {
  getUserProfileAction,
  getUserProfileSuccessAction,
  getUserProfileFailureAction,
} from '../actions/userProfile.actions';

import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';

@Injectable()
export class USerProfileEffect {
  constructor(
    private actions$: Actions,
    private userProfileService: UserProfileService
  ) {}

  getUserProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUserProfileAction),
      switchMap(({ slug }) => {
        return this.userProfileService.getUserProfile(slug).pipe(
          map((userProfile: IProfile) => {
            return getUserProfileSuccessAction({ userProfile });
          }),
          catchError(() => {
            return of(getUserProfileFailureAction());
          })
        );
      })
    )
  );
}
