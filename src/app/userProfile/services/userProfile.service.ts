import { IUserProfileResponse } from './../types/userProfile.interface';
import { environment } from 'src/environments/environment';
import { IProfile } from './../../shared/feed/types/feed.interface';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserProfileService {
  constructor(private http: HttpClient) {}

  getUserProfile(slug: string): Observable<IProfile> {
    const url = `${environment.apiUrl}profiles/${slug}`;
    return this.http
      .get(url)
      .pipe(map((res: IUserProfileResponse) => res.profile));
  }
}
