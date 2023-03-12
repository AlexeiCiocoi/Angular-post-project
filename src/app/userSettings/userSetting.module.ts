import { backendErrorMessagesModule } from './../shared/modules/backendErrorMessages/backendErrorMessages.module.ts';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { UserSettingComponent } from './component/userSettings.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { reducers } from './store/reducers';

const routes = [
  {
    path: 'settings',
    component: UserSettingComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('userSettings', reducers),
    ReactiveFormsModule,
    backendErrorMessagesModule
  ],
  declarations: [UserSettingComponent],
})
export class UserSettingsModule {}
