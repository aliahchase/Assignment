import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../redux/store'; // Ensure RootState is correctly imported

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown, // Extra argument types if any
  Action<string>
>;
