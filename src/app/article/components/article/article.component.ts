import { ICurrentUser } from './../../../shared/types/currentUser.interface';
import { Subscription, Observable, combineLatestWith, map } from 'rxjs';
import { IArticle } from './../../../shared/feed/types/feed.interface';
import { GetArticleAction } from './../../store/actions/article.action';
import { deleteArticleAction } from './../../store/actions/deleteArticle.action';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { articleSelector } from '../../store/article.selectors';
import { currentUserSelector } from 'src/app/auth/store/selectors';

@Component({
  selector: 'mc-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit, OnDestroy {
  constructor(private store: Store, private route: ActivatedRoute) {}

  slug: string;
  article: IArticle | null;
  articleSubscription: Subscription;
  isAuthor$: Observable<boolean>;
  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
    this.initializeListeners();
  }

  ngOnDestroy(): void {
    this.articleSubscription.unsubscribe();
  }

  initializeListeners() {
    this.articleSubscription = this.store
      .pipe(select(articleSelector))
      .subscribe((article: IArticle | null) => (this.article = article));
    this.isAuthor$ = this.store.pipe(select(articleSelector)).pipe(
      combineLatestWith(this.store.pipe(select(currentUserSelector))),
      map(([article, currentUser]: [IArticle | null, ICurrentUser | null]) => {
        if (!article || !currentUser) {
          return false;
        }
        return article.author.username === currentUser.username;
      })
    );
    console.log('isAuth', this.isAuthor$);
  }

  fetchData() {
    this.store.dispatch(GetArticleAction({ slug: this.slug }));
  }

  deleteArticle(): void {
    this.store.dispatch(deleteArticleAction({ slug: this.slug }));
  }

  initializeValues() {
    this.slug = this.route.snapshot.paramMap.get('slug');
  }
}
