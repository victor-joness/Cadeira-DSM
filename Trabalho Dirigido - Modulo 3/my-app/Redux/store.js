import { createStore, combineReducers } from 'redux';
import bookReducer from './reducers';

const rootReducer = combineReducers({
  books: bookReducer,
});

const store = createStore(rootReducer);

export default store;