import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { User, UserFull } from './types';

export interface InitialState {
  users: User[];
  userPage: UserFull;
  loading: boolean;
}

export const initialState: InitialState = {
  users: [],
  loading: false,
  userPage: {
    firstName: '',
    lastName: '',
    id: 0,
    image: '',
    age: 0,
    company: {
      address: {
        address: '',
        postalCode: '',
        city: '',
        state: '',
      },
    },
  },
};

//@ts-ignore
const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));

export default store;
