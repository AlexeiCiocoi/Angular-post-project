import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IGetFeedResponse } from './../types/feed.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class FeedService {
  constructor(private http: HttpClient) {}
  getFeed(url: string): Observable<IGetFeedResponse> {
    const fullApi = environment.apiUrl + url;
    return this.http.get<IGetFeedResponse>(fullApi);
  }
}
