import { initialState } from '../store';
import { Actions } from '../actions';

const rootReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case 'ADD_USERS': {
      return {
        ...state,
        users: action.users,
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
