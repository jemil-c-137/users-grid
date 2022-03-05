import { initialState } from '../store';
import { Actions } from '../actions';

const rootReducer = (state = initialState, action: Actions) => {
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
    default: {
      return {
        ...state,
      };
    }
  }
};

export default rootReducer;
