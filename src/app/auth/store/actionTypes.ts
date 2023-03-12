export enum ActionTypes {
  REGISTER = '[Auth] register',
  REGISTER_SUCCESS = '[Auth] register success',
  REGISTER_FAILURE = '[Auth] register failure',

  SIGN_IN = '[Auth] signIn',
  SIGN_IN_SUCCESS = '[Auth] signIn success',
  SIGN_IN_FAILURE = '[Auth] signIn failure',

  GET_CURRENT_USER = '[Auth] Get current user',
  GET_CURRENT_USER_SUCCESS = '[Auth] Get current user success',
  GET_CURRENT_USER_FAILURE = '[Auth] Get current user failure',

  UPDATE_CURRENT_USER = '[Auth] Update current user',
  UPDATE_CURRENT_USER_SUCCESS = '[Auth] Update current user success',
  UPDATE_CURRENT_USER_FAILURE = '[Auth] Update current user failure',

  LOGOUT = '[Auth] Logout current user',
}
