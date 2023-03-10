import { AddToFavoritesModule } from './../modules/addToFavorites/addToFavorites.module';
import { TagModule } from './../modules/tag/tag.module';
import { PaginationModule } from './../modules/pagination/pagination.module';
import { LoadingModule } from './../modules/loading/loading.module';
import { RouterModule } from '@angular/router';
import { FeedService } from './services/feed.service';
import { StoreModule } from '@ngrx/store';
import { GetFeedEffect } from './store/effects/getFeed.effect';
import { EffectsModule } from '@ngrx/effects';

import { FeedComponent } from './components/feed/feed.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { reducers } from './store/reducers';
import { ErrorMessageModule } from '../errorMessage/errorMessage.module';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducers),
    RouterModule,
    LoadingModule,
    ErrorMessageModule,
    PaginationModule,
    TagModule,
    AddToFavoritesModule
  ],
  declarations: [FeedComponent],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}
