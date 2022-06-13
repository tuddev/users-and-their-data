import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { JsonplaceholderTransoprt, UserModel } from '../../api';
import { Card, Spinner } from '../../components';
import { Store } from '../../store/store';
import { updateUsers, startUsersLoading, endUsersLoading } from '../../store';

export const UsersList = () => {
  const users = useSelector((state: Store) => state.users.users);
  const isLoading = useSelector((state: Store) => state.users.isUsersLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startUsersLoading());
    JsonplaceholderTransoprt.getUsers()
      .then((response: Array<UserModel>) => dispatch(updateUsers(response)))
      .catch(console.log)
      .finally(() => dispatch(endUsersLoading()));
  }, []);

  if (isLoading) {
    return <div className="p-20 flex justify-center w-full"><Spinner/></div>;
  }

  return <section className='flex flex-col items-center'>
    {
      users.map((user: UserModel) => <Card
        key={user.id}
        title={user.name}
        link={`/user-detail/${user.id}`}
      >
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {user.username}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {user.email}
        </p>
      </Card>)
    }
  </section>;
};
