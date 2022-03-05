import { InitialState, initialState } from '../store';
import { Actions } from '../actions';

const rootReducer = (state = initialState, action: Actions): InitialState => {
  switch (action.type) {
    case 'ADD_USERS': {
      return {
        ...state,
        users: action.users,
        loading: false,
      };
    }
    case 'SET_LOADING': {
      return {
        ...state,
        loading: action.loading,
      };
    }
    case 'ADD_USER_PAGE': {
      return {
        ...state,
        userPage: action.user,
        loading: false,
      };
    }
    case 'ADD_USER': {
      return {
        ...state,
        users: [...state.users, { ...action.user, id: state.users.length + 1 }],
      };
    }
    case 'DELETE_USER': {
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.userId),
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default rootReducer;
