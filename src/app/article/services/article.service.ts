import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environmet.prod';
import { Injectable } from '@angular/core';

@Injectable()
export class ArticleService {
  constructor(private http: HttpClient) {}
  deleteArticle(slug: string): Observable<{}> {
    const url = `${environment.apiUrl}/articles/${slug}`;
    return this.http.delete<{}>(url);
  }
}
