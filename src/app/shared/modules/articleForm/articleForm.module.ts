import { ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ArticleFormComponent } from './component/articleForm.component';
import { backendErrorMessagesModule } from '../backendErrorMessages/backendErrorMessages.module.ts';




@NgModule({
  imports: [CommonModule, ReactiveFormsModule,backendErrorMessagesModule],
  declarations: [ArticleFormComponent],
  exports:[ArticleFormComponent],
  providers: [],
})
export class ArticleFormModule {}
