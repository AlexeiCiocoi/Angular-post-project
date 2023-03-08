import { IArticle } from '../feed/types/feed.interface';

export interface IArticleResponse {
  article: IArticle;
}

export interface IArticleInput {
  title: string;
  description: string;
  body: string;
  tagList: string[];
}

