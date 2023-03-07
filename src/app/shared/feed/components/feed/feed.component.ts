import { ActivatedRoute, Params, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { feedSelector } from './../../store/feed.selectors';

import { IGetFeedResponse } from './../../types/feed.interface';
import { Observable, Subscription } from 'rxjs';
import { GetFeedAction } from './../../store/actions/getFeed.action';
import { Store, select } from '@ngrx/store';
import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { errorSelector, isLoadingSelector } from '../../store/feed.selectors';

import queryString from 'query-string';

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit, OnDestroy,OnChanges {
  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  @Input('apiUrl') apiUrlProps: string;

  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  feed$: Observable<IGetFeedResponse | null>;
  limit: number;
  baseUrl: string;
  currentPage: number;
  queryParamsSubscription: Subscription;

  ngOnInit() {
    this.initializeValues();

    this.initializeListeners();
  }
  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe();
  }
  ngOnChanges(changes: SimpleChanges): void {
      const isApiUrlChanged =
        !changes['apiUrlProps'].firstChange && changes['apiUrlProps'].currentValue !== changes['apiUrlProps'].previousValue;
        if(isApiUrlChanged){
          this.fetchData();  
        }
  }

  initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.feed$ = this.store.pipe(select(feedSelector));
    this.limit = environment.limit;
    this.baseUrl = this.router.url.split('?')[0];
  }

  fetchData(): void {
    const offset = this.currentPage * this.limit - this.limit;
    const parsedUrl = queryString.parseUrl(this.apiUrlProps);
    const stringifiedParams = queryString.stringify({
      limit: this.limit,
      offset,
      ...parsedUrl.query,
    });
    const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`;

    this.store.dispatch(GetFeedAction({ url: apiUrlWithParams }));
  }
  initializeListeners(): void {
    this.queryParamsSubscription = this.route.queryParams.subscribe(
      (params: Params) => {
        this.currentPage = Number(params['page'] || '1');
        this.fetchData();
      }
    );
  }
}
