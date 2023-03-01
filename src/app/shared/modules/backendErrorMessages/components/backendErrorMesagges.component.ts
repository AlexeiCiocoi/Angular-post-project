import { IBackendErrors } from '../../../types/backendError.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mc-backend-error-messages',
  templateUrl: './backendErrorMessages.component.html',
  styleUrls: ['./backendErrorMessages.component.scss'],
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input() backendErrors: IBackendErrors;

  errorMessages: string[];

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrors).map((name: string) => {
      console.log('errors', this.backendErrors);
      const messages = this.backendErrors[name].join(', ');
      return `${name} ${messages}`;
    });
  }
}
