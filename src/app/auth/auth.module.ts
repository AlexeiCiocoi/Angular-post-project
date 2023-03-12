import { LogoutEffect } from './store/effects/logout.effect';
import { UpdateCurrentUserEffect } from './store/effects/updateCurrentUser.effect';
import { GetCurrentUserEffect } from './store/effects/getCurrentUser.effect';
import { backendErrorMessagesModule } from './../shared/modules/backendErrorMessages/backendErrorMessages.module.ts';
import { SignInEffect } from './store/effects/signIn.effect';
import { SignInComponent } from './components/signIn/signIn.component';
import { PersistanceService } from './../shared/services/persistance.service';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';

import { RegisterComponent } from './components/register/register.component';
import { reducers } from './store/reducers';
import { AuthService } from './services/auth.service';
import { RegisterEffect } from './store/effects/register.effect';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: SignInComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([
      RegisterEffect,
      SignInEffect,
      GetCurrentUserEffect,
      UpdateCurrentUserEffect,
      LogoutEffect,
    ]),
    backendErrorMessagesModule,
  ],
  declarations: [RegisterComponent, SignInComponent],
  providers: [AuthService, PersistanceService],
})
export class AuthModule {}
