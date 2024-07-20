import { applyMiddleware, combineReducers, createStore, Middleware } from 'redux';
import  {thunk,ThunkMiddleware} from 'redux-thunk';
import usersReducer from './reducers/users'; // Import your users reducer

// Combine reducers
const rootReducer = combineReducers({
  users: usersReducer,
  // Add other reducers if needed
});

// Define RootState as the type of your combined reducers
export type RootState = ReturnType<typeof rootReducer>;

// Middleware setup
const middleware: Middleware<{}, RootState>[] = [thunk as ThunkMiddleware<RootState, any>]; // Add more middleware if necessary

// Create Redux store
const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

export default store;