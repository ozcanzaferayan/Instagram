import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../reducers/counterReducer';
import thunk from 'redux-thunk';

const middlewares = [thunk];

export const store = configureStore({
  reducer: counterReducer,
  middleware: middlewares,
});
