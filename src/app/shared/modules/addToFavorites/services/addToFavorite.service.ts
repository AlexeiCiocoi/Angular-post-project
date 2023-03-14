import { IArticleResponse } from './../../../types/article.interface';
import { IArticle } from './../../../feed/types/feed.interface';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class AddToFavoritesService {
  constructor(private http: HttpClient) {}
  addToFavorite(slug: string): Observable<IArticle> {
    const url = this.getUrl(slug);

    return this.http.post(url, {}).pipe(map(this.getArticle));
  }

  removeFromFavorite(slug: string): Observable<IArticle> {
    const url = this.getUrl(slug);
    return this.http.delete(url, {}).pipe(map(this.getArticle));
  }

  getUrl(slug: string): string {
    return `${environment.apiUrl}articles/${slug}/favorite`;
  }

  getArticle(res: IArticleResponse): IArticle {
    return res.article;
  }
}
