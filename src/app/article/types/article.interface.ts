import { IArticle } from './../../shared/feed/types/feed.interface';


export interface IArticleState {
  isLoading: boolean;
  error: string | null;
  article: IArticle | null;
}
