/* ---------===== custom props ====--------- */



/* ---------===== auth models =====--------- */

export interface Profile {
  name: string;
  photo?: string;
  id: number;
  createdAt: string;
  updatedAt: string;
  //not sure about this
  shoeList: Shoe[];
}

export interface User {
  name: string;
  email: string;
  profile: { id: number };
  id: number;
  createdAt: string;
  updatedAt: string;
}

export interface Shoe {
  style: string;
  profileId: number;
  photo: string;
  info: string;
  createdAt: string;
  updatedAt: string;
}