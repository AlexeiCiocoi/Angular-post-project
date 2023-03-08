import { FormBuilder, FormGroup } from '@angular/forms';
import { IArticleInput } from './../../../types/article.interface';
import { Store } from '@ngrx/store';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IBackendErrors } from 'src/app/shared/types/backendError.interface';

@Component({
  selector: 'mc-article-form',
  templateUrl: './articleForm.component.html',
  styleUrls: ['./articleForm.component.scss'],
})
export class ArticleFormComponent implements OnInit {
  @Input('initialValues') initialValuesProps: IArticleInput;
  @Input('isSubmitting') isSubmittingProps: boolean;
  @Input('errors') errorProps: IBackendErrors | null;

  @Output('articleSubmit') articleSubmitEvent =
    new EventEmitter<IArticleInput>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.form = this.fb.group({
      title: this.initialValuesProps.title,
      description: this.initialValuesProps.description,
      body: this.initialValuesProps.body,
      tagList: this.initialValuesProps.tagList.join(' '),
    });
  }

  onSubmit(): void {

    this.articleSubmitEvent.emit(this.form.value);
  }
}
