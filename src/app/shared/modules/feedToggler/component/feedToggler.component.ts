import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { isLoggedInSelector } from 'src/app/auth/store/selectors';

@Component({
  selector: 'mc-feed-toggler',
  templateUrl: './feedToggler.component.html',
  styleUrls: ['./feedToggler.component.scss'],
})
export class FeedTogglerComponent implements OnInit {
  constructor(private store: Store) {}
  @Input('tagName') tagNameProps: string | null;

  isLoggedIn$: Observable<boolean>;

  ngOnInit(): void {
    this.initialize();
   
  }

  initialize() {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
  }
}
