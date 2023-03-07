import { IGetPopularTagsResponse } from './../types/popularTags.types';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../../environments/environment';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable()
export class popularTagsService {
  constructor(private http: HttpClient) {}

  getPopularTags(): Observable<string[]> {
    const url = environment.apiUrl + '/tags';

    return this.http
      .get(url)
      .pipe(map((res: IGetPopularTagsResponse) => res.tags));
  }
}
