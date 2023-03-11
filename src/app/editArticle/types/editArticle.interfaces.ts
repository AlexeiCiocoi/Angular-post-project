import { IArticle } from './../../shared/feed/types/feed.interface';
import { IBackendErrors } from '../../shared/types/backendError.interface';
export interface IEditArticleState {
  isLoading: boolean;
  article: IArticle | null;
  isSubmitting: boolean;
  errors: IBackendErrors | null;
}
