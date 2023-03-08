import { TagModule } from './../shared/modules/tag/tag.module';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { GetArticleEffect } from './store/effects/getArticle.effect';
import { EffectsModule } from '@ngrx/effects';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { reducers } from './store/reducers';
import { ArticleService as SharedArticleService } from '../shared/services/article.service';
import { LoadingModule } from '../shared/modules/loading/loading.module';
import { ErrorMessageModule } from '../shared/errorMessage/errorMessage.module';
import { ArticleComponent } from './components/article/article.component';
import { ArticleService } from './services/article.service';

const routes = [
  {
    path: 'articles/:slug',
    component: ArticleComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetArticleEffect]),
    StoreModule.forFeature('article', reducers),
    RouterModule.forChild(routes),
    LoadingModule,
    ErrorMessageModule,
    TagModule,
  ],
  declarations: [ArticleComponent],
  exports: [ArticleComponent],
  providers: [SharedArticleService, ArticleService],
})
export class ArticleModule {}
