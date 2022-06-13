import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { JsonplaceholderTransoprt, UserModel } from '../../api';
import { PostModel } from '../../api/models';
import { Card } from '../../components';
import { ArrowRight, Spinner } from '../../components/icons';
import { Store } from '../../store/store';
import { updateUser, updateUserPosts, endUserPostsLoading, startUserPostsLoading } from '../../store';

export const UserDetail = () => {
  const { userId } = useParams();

  const dispatch = useDispatch();

  const users = useSelector<Store, Array<UserModel>>((state) => state.users.users);

  const currentUser = useSelector<Store, UserModel>((state) => state.user.user);
  const posts = useSelector<Store, Array<PostModel>>((state) => state.user.posts);
  const isPostsLoading = useSelector<Store, boolean>((state) => state.user.isUserPostLoading);

  useEffect(() => {
    if (!users.length) {
      JsonplaceholderTransoprt.getUser(userId)
        .then((user: UserModel) => {
          dispatch(updateUser(user));
        });
    } else {
      const user = users.filter((storedUser: UserModel) => storedUser.id === +userId)[0];
      dispatch(updateUser(user));
    }
  }, []);


  useEffect(() => {
    dispatch(startUserPostsLoading());
    JsonplaceholderTransoprt.getUserPosts(userId)
      .then((response: Array<PostModel>) => {
        dispatch(updateUserPosts(response));
      })
      .catch(console.log)
      .finally(() => dispatch(endUserPostsLoading()));
  }, []);

  useEffect(() => {
    return () => {
      dispatch(updateUserPosts([]));
      dispatch(updateUser(undefined));
    };
  }, []);


  if (!currentUser) return <div>Loading</div>;

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center">
        <Link to="/">
          <ArrowRight className="w-10 h-10 rotate-180 cursor-pointer hover:text-blue-700 transition-colors" />
        </Link>
        <div className=''>
          <div className='flex'>
            <img alt="user avatar" src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" className="w-24 h-24" />
            <ul>
              <li >{ currentUser.name }</li>
              <li >{ currentUser.phone }</li>
              <li >{ currentUser.company.name }</li>
            </ul>
          </div>
        </div>
      </div>
      {
        isPostsLoading && <Spinner/>
      }
      {
        posts.map((post: PostModel) => <Card
            key={post.id}
            title={post.title}
          >
          <p className="text-white first-letter:uppercase">
            {post.body}
          </p>
        </Card>)
      }
  </div>
  );
};
