export interface IPopularTagsState {
  isLoading: boolean;
  tags: IPopularTags | null;
  error: string | null;
}

export type IGetPopularTagsResponse = {
  tags: IPopularTags;
};

export type IPopularTags = string[];
