export interface Shop {
  id: number;
  shopname: string;
  shopowner: number;
  shoprating: string;
}

export interface User {
  discord: string;
  email: string;
  id: number;
  name: string;
  profilepic: string;
  username: string;
  shop: number;
}