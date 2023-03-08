import { CreateArticleEffect } from './store/effects/createArticle.service';
import { EffectsModule } from '@ngrx/effects';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CreateArticleComponent } from './component/createArticle.component';
import { ArticleFormModule } from '../shared/modules/articleForm/articleForm.module';
import { CreateArticleService } from './services/createArticle.service';

const routes = [
  {
    path: 'articles/new',
    component: CreateArticleComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes) , ArticleFormModule,EffectsModule.forFeature(CreateArticleEffect)],
  declarations: [CreateArticleComponent],
  providers: [CreateArticleService],
})
export class CreateArticleModule {}
