export interface Auth {
  token: string;
  profile: Profile;
}

export interface Profile {
  id: number;
  profile: string;
}
