import { IUserSettingsState } from './../../userSettings/types/userSettings.interface';
import { IEditArticleState } from './../../editArticle/types/editArticle.interfaces';
import { IArticleState } from './../../article/types/article.interface';
import { IPopularTagsState } from './../modules/popularTags/types/popularTags.types';
import { IFeedState } from './../feed/types/feed.interface';
import { IAuthState } from './../../auth/types/authState.interface';
import { ICreateArticleState } from '../../createArticle/types/createArticle.interfaces';

export interface IAppState {
  auth: IAuthState;
  feed: IFeedState;
  popularTags: IPopularTagsState;
  article: IArticleState;
  createArticle: ICreateArticleState;
  editArticle: IEditArticleState;
  userSettings: IUserSettingsState;
}
