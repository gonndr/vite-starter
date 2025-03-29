import { Store } from '@/state/types';
import { createSelector } from '@reduxjs/toolkit';

const selectState = (state: Store) => state.app;

export const selectCurrentModal = createSelector(
  selectState,
  ({ currentModal }) => currentModal
);
