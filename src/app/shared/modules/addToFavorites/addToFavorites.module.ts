import { AddToFavoriteEffect } from './store/effects/addToFavorite.effect';
import { EffectsModule } from '@ngrx/effects';
import { AddToFavoritesComponent } from './component/addToFavorites.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AddToFavoritesService } from './services/addToFavorite.service';

@NgModule({
  imports: [CommonModule, EffectsModule.forFeature([AddToFavoriteEffect])],
  declarations: [AddToFavoritesComponent],
  exports: [AddToFavoritesComponent],
  providers: [AddToFavoritesService],
})
export class AddToFavoritesModule {}
