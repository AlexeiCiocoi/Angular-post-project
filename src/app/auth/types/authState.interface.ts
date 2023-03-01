import { IBackendErrors } from './../../shared/types/backendError.interface';
import { ICurrentUser } from './../../shared/types/currentUser.interface';

export interface IAuthState {
  isLoading: boolean;
  currentUser: ICurrentUser | null;
  isLoggedIn: boolean | null;
  validationErrors: IBackendErrors | null;
}
