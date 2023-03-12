import { IBackendErrors } from './../../shared/types/backendError.interface';
export interface IUserSettingsState{
    isSubmitting: boolean;
    validationErrors: IBackendErrors | null; 
}