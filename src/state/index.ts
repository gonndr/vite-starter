import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import reducer from './reducers';
import { Store } from './types';
import { Action } from './utils/types';

const createStore = (): EnhancedStore => {
  const store = configureStore<Store, Action>({ reducer });
  return store;
};

export default createStore;
