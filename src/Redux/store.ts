import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { User } from './types';

export interface InitialState {
  users: User[];
}

export const initialState: InitialState = {
  users: [],
};

//@ts-ignore
const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));

export default store;
