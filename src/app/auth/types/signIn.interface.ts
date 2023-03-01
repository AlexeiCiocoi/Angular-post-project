import { IUserRegisterRequest } from './authResponse.interface';

export interface ISignIn {
  user: Omit<IUserRegisterRequest, 'username'>;
}
