export interface IFeedState {
  isLoading: boolean;
  error: string | null;
  data: IGetFeedResponse | null;
}

export interface IGetFeedResponse {
  articles: IArticle[];
  articlesCount: number;
}

export interface IArticle {
  author: IProfile;
  body: string;
  createdAt: string;
  description: string;
  favorites: boolean;
  favoritesCount: number;
  slug: string;
  tagList: string[];
  title: string;
  updatedAt: string;
}

export interface IProfile {
  username: string;
  bio: string | null;
  image: string;
  following: boolean;
}
