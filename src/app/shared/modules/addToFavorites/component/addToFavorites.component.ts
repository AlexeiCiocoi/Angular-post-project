import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mc-add-to-favorites',
  templateUrl: './addToFavorites.component.html',
})
export class AddToFavoritesComponent implements OnInit {
  @Input('isFavorites') isFavoritesProps: boolean;
  @Input('articleSlug') slugProps: string;
  @Input('favoritesCount') favoritesCountProps: number;

  isFavorite: boolean;
  favoritesCount: number;
  ngOnInit(): void {
    this.isFavorite = this.isFavoritesProps;
    this.favoritesCount = this.favoritesCountProps;
  }

  handleLike(): void {
    if (this.isFavorite) {
      this.favoritesCount = this.favoritesCount - 1;
    } else {
      this.favoritesCount = this.favoritesCount + 1;
    }
    this.isFavorite = !this.isFavorite;
  }
}
