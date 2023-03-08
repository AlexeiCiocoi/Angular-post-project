import { IArticle } from './../feed/types/feed.interface';
import { IArticleResponse } from './../types/article.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable()
export class ArticleService {
  constructor(private http: HttpClient) {}
  getArticle(slug: string): Observable<IArticle> {
    const fullApi = `${environment.apiUrl}articles/${slug}`;
    console.log('full api ', fullApi);
    return this.http
      .get<IArticleResponse>(fullApi)
      .pipe(map((res: IArticleResponse) => res.article));
  }
}
