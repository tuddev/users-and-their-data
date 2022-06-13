import { createSlice } from '@reduxjs/toolkit';
import { UserModel } from '../../api';
import { PostModel } from '../../api/models';
import { Action } from '../store';

export type UserSlice = {
  user: UserModel | undefined;
  posts: Array<PostModel>;
  isUserPostLoading: boolean;
};

export type UserSliceRedusers = {
  updateUser: (state: UserSlice, action: Action<UserModel>) => void;
  updateUserPosts: (state: UserSlice, action: Action<Array<PostModel>>) => void;
  startUserPostsLoading: (state: UserSlice) => void;
  endUserPostsLoading: (state: UserSlice) => void;
};

export const userSlice = createSlice<UserSlice, UserSliceRedusers>({
  name: 'user',
  initialState: {
    user: undefined,
    posts: [],
    isUserPostLoading: true,
  },
  reducers: {
    updateUser: (state, action) => {
      state.user = action.payload;
    },
    updateUserPosts: (state, action) => {
      state.posts = action.payload;
    },
    startUserPostsLoading: (state) => {
      state.isUserPostLoading = true;
    },
    endUserPostsLoading: (state) => {
      state.isUserPostLoading = false;
    },
  },
});

export const { updateUser, updateUserPosts, endUserPostsLoading, startUserPostsLoading } = userSlice.actions;

export default userSlice.reducer;



