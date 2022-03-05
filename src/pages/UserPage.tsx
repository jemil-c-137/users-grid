import React, { useEffect, useState } from 'react';
import { InitialState } from '../Redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchUserById } from '../Redux/actions';
import UserFullCard from '../components/UserFullCard';

const UserPage = () => {
  const [query, setQuery] = useState('https://dummyjson.com/users');
  let { id } = useParams<{ id: string }>();

  const dispatch = useDispatch();

  const userPage = useSelector((state: InitialState) => state.userPage);
  const loading = useSelector((state: InitialState) => state.loading);

  useEffect(() => {
    if (id) {
      dispatch(fetchUserById(query, parseInt(id)));
    }
  }, [query, dispatch, id]);

  return <div>{loading ? <p>loading</p> : <UserFullCard {...userPage} />}</div>;
};

export default UserPage;
