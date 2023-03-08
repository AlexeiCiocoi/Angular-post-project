import { environment } from './../../../environments/environmet.prod';
import { IArticle } from './../../shared/feed/types/feed.interface';
import { map, Observable } from 'rxjs';
import { IArticleInput, IArticleResponse } from './../../shared/types/article.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class CreateArticleService {
    constructor(private http: HttpClient){
        
    }

    createArticle(articleInput: IArticleInput): Observable<IArticle>{
        const url = environment.apiUrl+ '/articles'
        return this.http
          .post<IArticleResponse>(url, articleInput)
          .pipe(map((res: IArticleResponse) => res.article));
    }
}