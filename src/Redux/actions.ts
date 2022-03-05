import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { User, UserFull } from './types';

export interface addUsers {
  type: 'ADD_USERS';
  users: User[];
}

export interface addUserPage {
  type: 'ADD_USER_PAGE';
  user: UserFull;
}

export interface setLoading {
  type: 'SET_LOADING';
  loading: boolean;
}

export interface deleteUser {
  type: 'DELETE_USER';
  userId: number;
}

export const addUsersActionCreator = (users: User[]): addUsers => {
  return {
    type: 'ADD_USERS',
    users,
  };
};

export const addUserPageActionCreator = (user: UserFull): addUserPage => {
  return {
    type: 'ADD_USER_PAGE',
    user,
  };
};

export const setLoadingActionCreator = (loading: boolean): setLoading => {
  return {
    type: 'SET_LOADING',
    loading,
  };
};

export const deleteUserActionCreator = (userId: number): deleteUser => {
  return {
    type: 'DELETE_USER',
    userId,
  };
};

export const fetchUsers = (query: string): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    dispatch(setLoadingActionCreator(true));
    fetch(query)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((res: { users: User[] }) => {
        dispatch(addUsersActionCreator(res.users));
      })
      .catch((err) => console.log(err));
  };
};

export const fetchUserById = (query: string, id: number): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    dispatch(setLoadingActionCreator(true));
    fetch(`${query}/${id}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((res: UserFull) => {
        dispatch(addUserPageActionCreator(res));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export type Actions = addUsers | addUserPage | setLoading | deleteUser;
