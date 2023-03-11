import { environment } from '../../../environments/environmet.prod';
import { IArticle } from '../../shared/feed/types/feed.interface';
import { map, Observable } from 'rxjs';
import {
  IArticleInput,
  IArticlePostData,
  IArticleResponse,
} from '../../shared/types/article.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EditArticleService {
  constructor(private http: HttpClient) {}

  updateArticle(slug: string ,articleInput: IArticlePostData): Observable<IArticle> {
    const url = `${environment.apiUrl}'/articles/'${slug}`;
    console.log('send request ', articleInput);
    return this.http
      .put<IArticleResponse>(url, articleInput)
      .pipe(map((res: IArticleResponse) => res.article));
  }
}
