import { IGetFeedResponse } from './../../types/feed.interface';

import { FeedService } from './../../services/feed.service';
import {
  GetFeedAction,
  GetFeedSuccessAction,
  GetFeedFailureAction,
} from './../actions/getFeed.action';

import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';

@Injectable()
export class GetFeedEffect {
  constructor(private actions$: Actions, private feedService: FeedService) {}

  getFeed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetFeedAction),
      switchMap(({ url }) => {
        return this.feedService.getFeed(url).pipe(
          map((feed: IGetFeedResponse) => {
            return GetFeedSuccessAction({ feed });
          }),
          catchError(() => {
            return of(GetFeedFailureAction());
          })
        );
      })
    )
  );
}
