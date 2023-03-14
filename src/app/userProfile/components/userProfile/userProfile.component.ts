import { ICurrentUser } from 'src/app/shared/types/currentUser.interface';
import { currentUserSelector } from 'src/app/auth/store/selectors';
import { getUserProfileAction } from './../../store/actions/userProfile.actions';
import { IProfile } from './../../../shared/feed/types/feed.interface';
import { combineLatestWith, filter, map, Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  userProfileSelector,
  isLoadingSelector,
  errorSelector,
} from '../../store/userProfile.selectors';
@Component({
  selector: 'mc-user-profile',
  templateUrl: './userProfile.component.html',
})
export class UserProfileComponent implements OnInit, OnDestroy {
  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  isLoading$: Observable<boolean>;
  errors$: Observable<string | null>;
  userProfile: IProfile;
  userProfileSubscription: Subscription;
  slug: string;
  apiUrl: string;
  isCurrentUserProfile$: Observable<boolean>;

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }

  ngOnDestroy(): void {
    this.userProfileSubscription.unsubscribe();
  }
  fetchUserProfile(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.store.dispatch(getUserProfileAction({ slug: this.slug }));
  }

  initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.errors$ = this.store.pipe(select(errorSelector));

    this.isCurrentUserProfile$ = this.store
      .pipe(select(userProfileSelector), filter(Boolean))
      .pipe(
        combineLatestWith(
          this.store.pipe(select(currentUserSelector), filter(Boolean))
        ),
        map(
          ([userProfile, currentUser]: [
            IProfile | null,
            ICurrentUser | null
          ]) => {
            return userProfile.username === currentUser.username;
          }
        )
      );
  }

  initializeListeners(): void {
    this.userProfileSubscription = this.store
      .pipe(select(userProfileSelector), filter(Boolean))
      .subscribe((userProfile: IProfile) => (this.userProfile = userProfile));
    this.route.params.subscribe((params: Params) => {
      this.slug = params['slug'];
      this.fetchUserProfile();
    });
  }

  getApiUrl() {
    const isFavorites = this.router.url.includes('favorites');
    return (this.apiUrl = isFavorites
      ? `articles?favorited=${this.slug}`
      : `articles?author=${this.slug}`);
  }
}
