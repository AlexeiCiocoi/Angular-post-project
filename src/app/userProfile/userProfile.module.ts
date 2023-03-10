import { FeedModule } from './../shared/feed/feed.module';
import { StoreModule } from '@ngrx/store';
import { USerProfileEffect } from './store/effects/userProfile.effect';
import { EffectsModule } from '@ngrx/effects';
import { UserProfileService } from './services/userProfile.service';
import { RouterModule } from '@angular/router';
import { UserProfileComponent } from './components/userProfile/userProfile.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { reducers } from './store/reducers';

const routes = [
  {
    path: 'profiles/:slug',
    component: UserProfileComponent,
  },
  {
    path: 'profiles/:slug/favorites',
    component: UserProfileComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([USerProfileEffect]),
    StoreModule.forFeature('userProfile', reducers),
    FeedModule,
  ],
  declarations: [UserProfileComponent],
  providers: [UserProfileService],
})
export class UserProfileModule {}
