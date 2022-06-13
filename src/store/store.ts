import { configureStore } from '@reduxjs/toolkit';
import usersReducer, { UsersSlice } from './users/usersSlice';
import userReducer, { UserSlice } from './user/userSlice';

export type Action<T> = {
  type: string,
  payload: T;
};

export type Store = {
  users: UsersSlice,
  user: UserSlice,
};

export default configureStore({
  reducer: {
    users: usersReducer,
    user: userReducer,
  },
});
