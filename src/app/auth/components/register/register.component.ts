import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IBackendErrors } from './../../../shared/types/backendError.interface';
import { validationErrorsSelector } from './../../store/selectors';
import { IUserRegisterRequest } from './../../types/authResponse.interface';
import { isLoadingSelector } from '../../store/selectors';
import { registerAction } from './../../store/actions/register.action';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  isLoading$!: Observable<boolean>;
  backendErrors$!: Observable<IBackendErrors>;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit() {
    this.initializeForm();
    this.initializeValues();
  }

  initializeValues() {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  initializeForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: '',
    });
  }

  onSubmit() {
    const request: IUserRegisterRequest = {
      user: this.form.value,
    };
    this.store.dispatch(registerAction({ request }));
  }
}
