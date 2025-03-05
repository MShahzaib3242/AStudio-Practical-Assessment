import { createSlice } from "@reduxjs/toolkit";

import { IUsersInitialState } from "../../types/users.types";

const initialState: IUsersInitialState = {
  users: null,
  allUsers: null,
  isUsersLoading: false,
  isAllUsersLoading: false,
};
export const USERS_SLICE_NAME = "users";

const usersSlice = createSlice({
  name: USERS_SLICE_NAME,
  initialState,
  reducers: {
    setUsersSlice: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setUsersSlice } = usersSlice.actions;

export const selectUsers = (state: {
  [USERS_SLICE_NAME]: IUsersInitialState;
}) => state[USERS_SLICE_NAME];
export default usersSlice.reducer;
