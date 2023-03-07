import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularTagsComponent } from './component/popularTags.component';
import { popularTagsService } from './services/popularTags.service';
import { reducers } from './store/reducers';
import { GetPopularTagsEffect } from './store/effects/popularTags.effect';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('popularTags', reducers),
    EffectsModule.forFeature([GetPopularTagsEffect]),
  ],
  declarations: [PopularTagsComponent],
  exports: [PopularTagsComponent],
  providers: [popularTagsService],
})
export class PopularTagsModule {}
