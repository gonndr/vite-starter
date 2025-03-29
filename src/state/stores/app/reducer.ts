import Reducer from '@/state/utils/Reducer';
import { setCurrentModal } from './actions';
import { AppStore } from './types';

const initialAppState: AppStore = { currentModal: null };

export default new Reducer(initialAppState)
  .addCase(setCurrentModal, (state, { payload }) => ({
    ...state,
    currentModal: payload,
  }))
  .build();
