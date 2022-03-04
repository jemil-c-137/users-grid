import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { User } from './types';

export interface addUsers {
  type: 'ADD_USERS';
  users: any[];
}

export const addUsersActionCreator = (users: User[]): addUsers => {
  return {
    type: 'ADD_USERS',
    users,
  };
};

export const fetchUsers = (query: string): ThunkAction<Promise<void>, {}, {}, addUsers> => {
  return async (dispatch: ThunkDispatch<{}, {}, addUsers>): Promise<void> => {
    fetch(query)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((res: { users: User[] }) => {
        dispatch(addUsersActionCreator(res.users));
      });
  };
};

export type Actions = addUsers;
