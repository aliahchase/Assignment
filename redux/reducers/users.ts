// reducers/usersReducer.ts

import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  TOGGLE_EMAIL_VISIBILITY,
  SET_CURRENT_PAGE,
  SET_TOTAL_PAGES,
} from '../actions/userActionTypes';

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}

interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
  showEmails: boolean;
  currentPage: number;
  totalPages: number;
}

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
  showEmails: false,
  currentPage: 1,
  totalPages: 0,
};

const usersReducer = (state: UsersState = initialState, action: any) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case TOGGLE_EMAIL_VISIBILITY:
      return {
        ...state,
        showEmails: !state.showEmails,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case SET_TOTAL_PAGES:
      return {
        ...state,
        totalPages: action.payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
