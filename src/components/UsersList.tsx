import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUsers } from '../Redux/actions';
import { InitialState } from '../Redux/store';
import UserCard from './UserCard';
import styles from './UserList.module.css';

const UsersList = () => {
  const [query, setQuery] = useState('https://dummyjson.com/users');

  const dispatch = useDispatch();

  const users = useSelector((state: InitialState) => state.users);
  const loading = useSelector((state: InitialState) => state.loading);

  console.log(loading);

  console.log(users, 'users');

  useEffect(() => {
    if (users.length === 0) {
      dispatch(fetchUsers(query));
    }
  }, [query, users, dispatch]);

  return (
    <div className={styles.wrapper}>
      {loading ? (
        <p>loading</p>
      ) : (
        users.map((user) => (
          <div key={user.id} className={styles.card}>
            <UserCard {...user} />
          </div>
        ))
      )}
    </div>
  );
};

export default UsersList;
