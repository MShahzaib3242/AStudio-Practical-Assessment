export interface IUsersInitialState {
  users: {
    users: [];
    total: number;
    skip: number;
    limit: number;
  } | null;
  filteredUsers: {
    users: [];
    total: number;
    skip: number;
    limit: number;
  } | null;
  isUsersLoading: boolean;
}

export interface filterProps {
  limit?: number;
  key?: string;
  value?: string;
  skip?: number;
}

export interface UserFilters {
  firstName: string;
  lastName: string;
  maidenName: string;
  gender: string;
  email: string;
  username: string;
  bloodGroup: string;
  eyeColor: string;
  height: string;
  weight: string;
  phone: string;
}
