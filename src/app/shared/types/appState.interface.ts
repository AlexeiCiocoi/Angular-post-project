import { IFeedState } from './../feed/types/feed.interface';
import { IAuthState } from './../../auth/types/authState.interface';

export interface IAppState {
    auth: IAuthState;
    feed: IFeedState;
}