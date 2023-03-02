import { ISignIn } from './../types/signIn.interface';
import { IUserRegisterRequest } from './../types/authResponse.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { ICurrentUser } from './../../shared/types/currentUser.interface';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  getUser(res: IUserRegisterRequest) {
    return res.user;
  }

  register(data: IUserRegisterRequest): Observable<ICurrentUser> {
    const url = environment.apiUrl + '/users';
    return this.http
      .post<IUserRegisterRequest>(url, data)
      .pipe(map(this.getUser));
  }

  login(data: ISignIn): Observable<ICurrentUser> {
    const url = environment.apiUrl + '/users/login';

    return this.http
      .post<IUserRegisterRequest>(url, data)
      .pipe(map(this.getUser));
  }

  getCurrentUser(): Observable<ICurrentUser> {
    const url = environment.apiUrl + '/user';
    return this.http.get(url).pipe(map(this.getUser));
  }
}
