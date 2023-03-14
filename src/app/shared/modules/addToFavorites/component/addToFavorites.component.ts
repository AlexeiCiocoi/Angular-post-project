import { IArticle } from './../../../feed/types/feed.interface';
import { addToFavoriteAction } from './../store/actions/addToFavorite.action';
import { Store } from '@ngrx/store';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mc-add-to-favorites',
  templateUrl: './addToFavorites.component.html',
})
export class AddToFavoritesComponent implements OnInit {
  @Input('isFavorites') isFavoritesProps: boolean;
  @Input('articleSlug') slugProps: string;
  @Input('favoritesCount') favoritesCountProps: number;
  @Input('article') articleProps: IArticle;
  isFavorite: boolean;
  favoritesCount: number;

  constructor(private store: Store) {}
  ngOnInit(): void {
    this.isFavorite = this.isFavoritesProps;
    this.favoritesCount = this.favoritesCountProps;
  }

  handleLike(): void {
    console.log('article', this.articleProps);
    this.store.dispatch(
      addToFavoriteAction({
        isFavorite: this.isFavoritesProps,
        slug: this.slugProps,
      })
    );
    if (this.isFavorite) {
      this.favoritesCount = this.favoritesCount - 1;
    } else {
      this.favoritesCount = this.favoritesCount + 1;
    }
    this.isFavorite = !this.isFavorite;
  }
}
