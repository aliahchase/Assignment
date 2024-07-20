import { Dispatch } from 'redux';
import axios from 'axios';
import { AppThunk } from '@/types/types';
import { RootState } from '../store';
import {
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  SET_CURRENT_PAGE,
  SET_TOTAL_PAGES,
  TOGGLE_EMAIL_VISIBILITY,
} from './userActionTypes';

export const fetchUsers = (page: number = 1, perPage: number = 6): AppThunk<void> => {
  return async (dispatch: Dispatch, getState: () => RootState) => {
    dispatch({ type: FETCH_USERS_REQUEST });

    try {
      const response = await axios.get(`https://reqres.in/api/users?page=${page}&per_page=${perPage}`);
      
      const { data, total_pages } = response.data;
      
      
      // Filter users based on criteria (first_name starts with "G" OR last_name starts with "W")
      const filteredUsers = data.filter((user: any) => user.first_name.startsWith('G') || user.last_name.startsWith('W'));

      dispatch({
        type: FETCH_USERS_SUCCESS,
        payload: filteredUsers,
      });

      dispatch({
        type: SET_TOTAL_PAGES,
        payload: total_pages,
      });

      dispatch({
        type: SET_CURRENT_PAGE,
        payload: page,
      });
    } catch (error) {
      dispatch({
        type: FETCH_USERS_FAILURE,
        payload: error instanceof Error ? error.message : 'Unknown error occurred',
      });
    }
  };
};

export const toggleEmailVisibility = () => ({
  type: TOGGLE_EMAIL_VISIBILITY,
});

export const setCurrentPage = (page: number): AppThunk<void> => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: SET_CURRENT_PAGE,
      payload: page,
    });
  };
};

export const setTotalPages = (totalPages: number) => ({
  type: SET_TOTAL_PAGES,
  payload: totalPages,
});