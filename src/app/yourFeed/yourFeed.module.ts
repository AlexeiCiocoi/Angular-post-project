import { PopularTagsModule } from '../shared/modules/popularTags/popularTags.module';

import { BannerModule } from '../shared/banner/banner.module';
import { FeedModule } from '../shared/feed/feed.module';

import { RouterModule } from '@angular/router';
import { YourFeedComponent } from './components/yourFeed.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeedTogglerModule } from '../shared/modules/feedToggler/feedToggler.module';

const routes = [
  {
    path: 'feed',
    component: YourFeedComponent,
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
  declarations: [YourFeedComponent],
})
export class YourFeedModule {}
