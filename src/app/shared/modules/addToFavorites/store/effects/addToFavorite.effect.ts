import { IArticle } from './../../../../feed/types/feed.interface';
import { AddToFavoritesService } from './../../services/addToFavorite.service';

import {
  addToFavoriteAction,
  addToFavoriteSuccessAction,
  addToFavoriteFailureAction,
} from './../actions/addToFavorite.action';

import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';

@Injectable()
export class AddToFavoriteEffect {
  constructor(
    private actions$: Actions,
    private addToFavorite: AddToFavoritesService
  ) {}

  addToFavorite$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addToFavoriteAction),
      switchMap(({ isFavorite, slug }) => {
        const article$ = isFavorite
          ? this.addToFavorite.removeFromFavorite(slug)
          : this.addToFavorite.addToFavorite(slug);

        return article$.pipe(
          map((article: IArticle) => {
            return addToFavoriteSuccessAction({ article });
          }),
          catchError(() => {
            return of(addToFavoriteFailureAction());
          })
        );
      })
    )
  );
}
