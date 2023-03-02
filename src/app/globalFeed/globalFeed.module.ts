import { FeedModule } from './../shared/feed/feed.module';

import { RouterModule } from '@angular/router';
import { GlobalFeedComponent } from './components/globalFeed/globalFeed.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

const routes = [
  {
    path: '',
    component: GlobalFeedComponent,
  },
];

@NgModule({
  imports: [CommonModule, FeedModule, RouterModule.forChild(routes)],
  declarations: [GlobalFeedComponent],
})
export class GlobalFeedModule {
  
}
