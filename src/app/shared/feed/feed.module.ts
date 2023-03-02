import { RouterModule } from '@angular/router';
import { FeedService } from './services/feed.service';
import { StoreModule } from '@ngrx/store';
import { GetFeedEffect } from './store/effects/getFeed.effect';
import { EffectsModule } from '@ngrx/effects';

import { FeedComponent } from './components/feed/feed.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { reducers } from './store/reducers';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducers),
    RouterModule
  ],
  declarations: [FeedComponent],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}