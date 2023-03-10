import { PopularTagsModule } from './../shared/modules/popularTags/popularTags.module';
import { ErrorMessageModule } from './../shared//errorMessage/errorMessage.module';
import { BannerModule } from './../shared/banner/banner.module';
import { FeedModule } from './../shared/feed/feed.module';

import { RouterModule } from '@angular/router';
import { GlobalFeedComponent } from './components/globalFeed/globalFeed.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeedTogglerModule } from '../shared/modules/feedToggler/feedToggler.module';

const routes = [
  {
    path: '',
    component: GlobalFeedComponent,
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
  declarations: [GlobalFeedComponent],
})
export class GlobalFeedModule {}
