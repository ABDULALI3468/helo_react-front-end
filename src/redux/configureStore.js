import { configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import thunk from 'redux-thunk';
import greetingsReducer from './greetings/greetings';

const middleware = [thunk];

const store = configureStore({
  reducer: {
    greeting: greetingsReducer,
  },
  middleware,
});

export default store;
