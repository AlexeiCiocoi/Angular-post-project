import { GetPopularTagsAction } from './../store/actions/popularTags.action';
import { IGetPopularTagsResponse, IPopularTags } from './../types/popularTags.types';
import { Store , select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  popularTagsSelector,
  loadingPopularTagsSelector,
} from '../store/popularTags.selector';

@Component({
  selector: 'mc-popular-tags',
  templateUrl: './popularTags.component.html',
  styleUrls: ['./popularTags.component.css'],
})
export class PopularTagsComponent implements OnInit {
  constructor(private store: Store) {}

  popularTags$: Observable<IPopularTags>;
  isLoading$: Observable<boolean>;
  ngOnInit() {
    this.initializeValues();
    this.fetchData();
  }
  fetchData(){
    this.store.dispatch(GetPopularTagsAction())
  }

  initializeValues() {
    this.popularTags$ = this.store.pipe(select(popularTagsSelector));
    this.isLoading$ = this.store.pipe(select(loadingPopularTagsSelector));
  }
}
