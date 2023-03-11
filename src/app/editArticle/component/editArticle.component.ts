import { IArticle } from './../../shared/feed/types/feed.interface';
import { IArticleInput } from './../../shared/types/article.interface';
import { getArticleAction } from './../store/actions/getArticle.action';

import {
  isSubmittingSelector,
  updateArticleErrorsSelector,
  getArticleSelector,
} from '../store/editArticle.selectors';
import { IBackendErrors } from '../../shared/types/backendError.interface';
import { filter, map, Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { updateArticleAction } from '../store/actions/editArticle.action';

@Component({
  selector: 'mc-edit-article',
  templateUrl: './editArticle.component.html',
  styleUrls: ['./editArticle.component.scss'],
})
export class EditArticleComponent implements OnInit {
  constructor(private store: Store, private route: ActivatedRoute) {}

  isSubmitting$: Observable<boolean>;
  isLoading$: Observable<boolean>;
  initialValues$: Observable<IArticleInput>;
  validationErrors$: Observable<IBackendErrors | null>;
  slug: string;

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
  }

  initializeValues() {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.initialValues$ = this.store.pipe(
      select(getArticleSelector),
      filter(Boolean),
      map((article: IArticle) => {
        return {
          title: article.title,
          description: article.description,
          tagList: article.tagList,
          body: article.body,
        };
      })
    );
    this.validationErrors$ = this.store.pipe(
      select(updateArticleErrorsSelector)
    );
  }

  fetchData() {
    this.store.dispatch(getArticleAction({ slug: this.slug }));
  }

  onSubmit(articleInput: IArticleInput): void {
    this.store.dispatch(updateArticleAction({ articleInput, slug: this.slug }));
  }
}
