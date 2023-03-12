export interface ICurrentUser {
  id: number;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  bio: string | null;
  token: string;
  image: string | null;
}

export interface ICurrentUserInput extends ICurrentUser {
  password: string;
}
