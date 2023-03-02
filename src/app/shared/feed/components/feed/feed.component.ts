import { feedSelector } from './../../store/feed.selectors';

import { IGetFeedResponse } from './../../types/feed.interface';
import { Observable } from 'rxjs';
import { GetFeedAction } from './../../store/actions/getFeed.action';
import { Store, select } from '@ngrx/store';
import { Component, Input, OnInit } from '@angular/core';
import { errorSelector, isLoadingSelector } from '../../store/feed.selectors';

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit {
  constructor(private store: Store) {}
  @Input('apiUrl') apiUrlProps: string;

  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  feed$: Observable<IGetFeedResponse | null>;

  ngOnInit() {
    this.initializeValues();
    this.fetchData();
  }

  initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.feed$ = this.store.pipe(select(feedSelector));
  }

  fetchData(): void {
    this.store.dispatch(GetFeedAction({ url: this.apiUrlProps }));
  }
}
