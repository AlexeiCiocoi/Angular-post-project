import { PopularTagsModule } from './../shared/modules/popularTags/popularTags.module';
import { ErrorMessageModule } from './../shared//errorMessage/errorMessage.module';
import { BannerModule } from './../shared/banner/banner.module';
import { FeedModule } from './../shared/feed/feed.module';

import { RouterModule } from '@angular/router';
import {TagFeedComponent } from './components/tagFeed.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeedTogglerModule } from '../shared/modules/feedToggler/feedToggler.module';

const routes = [
  {
    path: 'tags/:slug',
    component: TagFeedComponent,
  },
];

@NgModule({
  imports: [
    FeedTogglerModule,
    CommonModule,
    FeedModule,
    BannerModule,
    PopularTagsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [TagFeedComponent],
})
export class TagFeedModule {}
