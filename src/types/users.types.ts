export interface IUsersInitialState {
  users: {
    users: [];
    total: number;
    skip: number;
    limit: number;
  } | null;
  isUsersLoading: boolean;
}
