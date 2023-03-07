import { IGetPopularTagsResponse, IPopularTags } from './../../types/popularTags.types';


import {
  GetPopularTagsAction,
  GetPopularTagsSuccessAction,
  GetPopularTagsFailureAction,
} from './../actions/popularTags.action';

import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { popularTagsService } from '../../services/popularTags.service';

@Injectable()
export class GetPopularTagsEffect {
  constructor(
    private actions$: Actions,
    private popularTagsService: popularTagsService
  ) {}

  getPopularTags$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetPopularTagsAction),
      switchMap(() => {
        return this.popularTagsService.getPopularTags().pipe(
          map((popularTags: IPopularTags) => {
            return GetPopularTagsSuccessAction({ popularTags });
          }),
          catchError(() => {
            return of(GetPopularTagsFailureAction());
          })
        );
      })
    )
  );
}
