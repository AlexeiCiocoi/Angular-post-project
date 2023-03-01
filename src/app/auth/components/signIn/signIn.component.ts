import { ISignIn } from './../../types/signIn.interface';
import { signInAction } from './../../store/actions/signIn.action';
import { isLoadingSelector, validationErrorsSelector } from './../../store/selectors';
import { Store , select } from '@ngrx/store';
import { IBackendErrors } from './../../../shared/types/backendError.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signIn',
  templateUrl: './signIn.component.html',
  styleUrls: ['./signIn.component.scss'],
})
export class SignInComponent implements OnInit {

  isLoading$: Observable<boolean>;
  form: FormGroup;
  backendErrors$:Observable<IBackendErrors>

  constructor(private fb: FormBuilder , private store: Store) {}

  

  ngOnInit() {
    this.initializeForm();
    this.initializeValues();
  }

  onSubmit(){
    const request:ISignIn = {
      user: this.form.value
    }

    this.store.dispatch(signInAction({request}))
  }

  initializeValues(){
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
  }

  initializeForm() {
    this.form = this.fb.group({
      email: '',
      password: '',
    });
  }
}
