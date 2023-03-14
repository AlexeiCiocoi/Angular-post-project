import { IProfile } from './../../shared/feed/types/feed.interface';
export interface IUserProfileResponse {
  profile: IProfile;
}

export interface IUserProfileState{
  data: IProfile | null,
  isLoading: boolean,
  errors: string | null
}