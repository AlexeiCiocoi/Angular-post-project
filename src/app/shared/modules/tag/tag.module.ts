import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from './component/tag.component';

@NgModule({
  imports: [CommonModule,RouterModule],
  declarations: [TagComponent],
  exports: [TagComponent],
})
export class TagModule {}
