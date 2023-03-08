import { IArticleState } from './../../article/types/article.interface';
import { IPopularTags, IPopularTagsState } from './../modules/popularTags/types/popularTags.types';
import { IFeedState } from './../feed/types/feed.interface';
import { IAuthState } from './../../auth/types/authState.interface';

export interface IAppState {
    auth: IAuthState;
    feed: IFeedState;
    popularTags: IPopularTagsState;
    article: IArticleState;
}