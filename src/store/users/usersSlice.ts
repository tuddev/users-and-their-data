import { createSlice } from '@reduxjs/toolkit';
import { UserModel } from '../../api';
import { Action } from '../store';


export type UsersSlice = {
  users: Array<UserModel> | undefined;
  isUsersLoading: boolean;
};

export type UsersSliceRedusers = {
  updateUsers: (state: UsersSlice, action: Action<Array<UserModel>>) => void;
  startUsersLoading: (state: UsersSlice) => void;
  endUsersLoading: (state: UsersSlice) => void;
};

export const usersSlice = createSlice<UsersSlice, UsersSliceRedusers>({
  name: 'users',
  initialState: {
    users: [],
    isUsersLoading: true,
  },
  reducers: {
    updateUsers: (state, action) => {
      state.users = action.payload;
    },
    startUsersLoading: (state) => {
      state.isUsersLoading = true;
    },
    endUsersLoading: (state) => {
      state.isUsersLoading = false;
    },
  },
});

export const { updateUsers, startUsersLoading, endUsersLoading } = usersSlice.actions;

export default usersSlice.reducer;
