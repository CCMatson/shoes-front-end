/* ---------==== custom forms ====--------- */

export interface NewShoeFormData {
  style: string;
  photo: string;
  info: string;
}

export interface EditShoeFormData extends NewShoeFormData {
  id: number
}
//make interface to extend newshoeform


/* ---------===== auth forms =====--------- */

export interface LoginFormData {
  email: string;
  password: string;
}

export interface SignupFormData {
  name: string;
  email: string;
  password: string;
  passwordConf: string;
}

export interface ChangePasswordFormData {
  oldPassword: string;
  newPassword: string;
  newPasswordConf: string;
}

export interface PhotoFormData {
  photo: File | null;
}
