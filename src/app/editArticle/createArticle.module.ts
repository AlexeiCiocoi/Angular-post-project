import { LoadingModule } from './../shared/modules/loading/loading.module';
import { ArticleService as SharedArticleService } from './../shared/services/article.service';
import { StoreModule } from '@ngrx/store';
import { EditArticleEffect } from './store/effects/editArticle.effect';
import { EffectsModule } from '@ngrx/effects';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ArticleFormModule } from '../shared/modules/articleForm/articleForm.module';

import { reducers } from './store/reducers';
import { EditArticleComponent } from './component/editArticle.component';
import { EditArticleService } from './services/editArticle.service';
import { GetArticleEffect } from './store/effects/getArticle.effect';

const routes = [
  {
    path: 'articles/:slug/edit',
    component: EditArticleComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule,
    EffectsModule.forFeature([EditArticleEffect,GetArticleEffect]),
    StoreModule.forFeature('editArticle', reducers),
    LoadingModule
  ],
  declarations: [EditArticleComponent],
  providers: [EditArticleService,SharedArticleService],
})
export class EditArticleModule {}
