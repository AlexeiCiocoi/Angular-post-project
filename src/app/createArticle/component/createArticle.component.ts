import { createArticleAction } from './../store/actions/createArticle.action';
import {
  isSubmittingSelector,
  createArticleErrorsSelector,
} from './../store/createArticle.selectors';
import { IBackendErrors } from './../../shared/types/backendError.interface';
import { Observable } from 'rxjs';
import { IArticleInput } from './../../shared/types/article.interface';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mc-create-article',
  templateUrl: './createArticle.component.html',
  styleUrls: ['./createArticle.component.scss'],
})
export class CreateArticleComponent implements OnInit {
  constructor(private store: Store) {}

  initialValues: IArticleInput = {
    title: '',
    description: '',
    body: '',
    tagList: [],
  };

  isSubmitting$: Observable<boolean>;
  validationErrors$: Observable<IBackendErrors | null>;

  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.validationErrors$ = this.store.pipe(
      select(createArticleErrorsSelector)
    );
  }

  onSubmit(articleInput: IArticleInput): void {
    this.store.dispatch(createArticleAction({ articleInput }));
  }
}
