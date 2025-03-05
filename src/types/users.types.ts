export interface IUsersInitialState {
  users: {
    users: UserFilters[];
    total: number;
    skip: number;
    limit: number;
  } | null;
  allUsers: {
    users: UserFilters[];
    total: number;
    skip: number;
    limit: number;
  } | null;
  isUsersLoading: boolean;
  isAllUsersLoading: boolean;
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
  age: string;
  gender: string;
  email: string;
  username: string;
  bloodGroup: string;
  eyeColor: string;
  height: string;
  weight: string;
  phone: string;
}
