/* ---------===== custom props ====--------- */


export interface Shoe {
  id: number;
  style: string;
  profileId: number;
  // photo: string;
  info: string;
  createdAt: string;
  updatedAt: string;
}

/* ---------===== auth models =====--------- */

export interface Profile {
  name: string;
  photo?: string;
  id: number;
  createdAt: string;
  updatedAt: string;
  //not sure about this
}

export interface User {
  name: string;
  email: string;
  profile: { id: number };
  id: number;
  createdAt: string;
  updatedAt: string;
}
