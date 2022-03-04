import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../Redux/actions';
import { InitialState } from '../Redux/store';
import UserCard from './UserCard';

const UsersList = () => {
  const [query, setQuery] = useState('https://dummyjson.com/users');

  const dispatch = useDispatch();

  const users = useSelector((state: InitialState) => state.users);

  console.log(users, 'users');

  useEffect(() => {
    dispatch(fetchUsers(query));
  }, [query]);

  return (
    <div style={{ margin: '0 auto', maxWidth: '1440px' }}>
      {users.map((user) => (
        <div key={user.id} style={{ maxWidth: '100px', margin: '0 auto', height: 'auto' }}>
          <UserCard {...user} />
        </div>
      ))}
    </div>
  );
};

export default UsersList;
