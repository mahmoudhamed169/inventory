export interface UserData {
  UserName: string;
  RoleID: string;
  Email: string;
}

export interface AuthContextType {
  userData: UserData | null;
  saveUserData: () => void;
}