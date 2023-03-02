import { Store, select } from '@ngrx/store';
import { ICurrentUser } from './../../../types/currentUser.interface';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {
  isLoggedInSelector,
  isAnonymousSelector,
  currentUserSelector,
} from 'src/app/auth/store/selectors';

@Component({
  selector: 'mc-topBar',
  templateUrl: './topBar.component.html',
  styleUrls: ['./topBar.component.css'],
})
export class TopBarComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  isAnonymous$: Observable<boolean>;
  currentUser$: Observable<ICurrentUser | null>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
    this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector));
    this.currentUser$ = this.store.pipe(select(currentUserSelector));
    console.log('anonym', this.isAnonymous$);
    console.log('isLoggedIn$', this.isLoggedIn$);
  }
}
