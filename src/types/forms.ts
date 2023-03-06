/* ---------==== custom forms ====--------- */

export interface NewShoeFormData {
  style: string;
  info: string;
  photo: string;
}

export interface EditShoeFormData extends NewShoeFormData {
  id: number
}


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
