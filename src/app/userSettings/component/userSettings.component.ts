import { ICurrentUserInput } from './../../shared/types/currentUser.interface';
import { currentUserSelector } from './../../auth/store/selectors';
import { Store, select } from '@ngrx/store';
import { ICurrentUser } from 'src/app/shared/types/currentUser.interface';
import { IBackendErrors } from './../../shared/types/backendError.interface';
import { Observable, Subscription, filter } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../store/userSetting.selectors';
import { updateUserAction } from 'src/app/auth/store/actions/updateCurrentUser.action';

@Component({
  selector: 'mc-setting',
  templateUrl: './userSetting.component.html',
})
export class UserSettingComponent implements OnInit, OnDestroy {
  constructor(private fb: FormBuilder, private store: Store) {}

  isSubmitting$: Observable<boolean>;
  validationErrors$: Observable<IBackendErrors | null>;
  currentUser: ICurrentUser;
  currentUserSubscription: Subscription;
  form: FormGroup;

  ngOnInit(): void {
    this.initializeListeners();
    this.initializeValues();
    this.initializeForm();
  }
  ngOnDestroy(): void {
    this.currentUserSubscription.unsubscribe();
  }
  initializeListeners(): void {
    this.currentUserSubscription = this.store
      .pipe(select(currentUserSelector), filter(Boolean))
      .subscribe((currentUSer: ICurrentUser) => {
        this.currentUser = currentUSer;
        this.initializeForm();
      });
  }
  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.validationErrors$ = this.store.pipe(select(validationErrorsSelector));
  }
  initializeForm() {
    this.form = this.fb.group({
      image: this.currentUser.image,
      username: this.currentUser.username,
      bio: this.currentUser.bio,
      email: this.currentUser.email,
      password: '',
    });
  }
  onSubmit() {
    const currentUserInput: ICurrentUserInput = {
      ...this.currentUser,
      ...this.form.value,
    };
    this.store.dispatch(updateUserAction({ currentUserInput }));
  }
  logout() {}
}
