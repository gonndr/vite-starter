import { createActionCreator } from '@/state/utils/createActionCreator';

export const setCurrentModal = createActionCreator<string | null>(
  'SET_CURRENT_MODAL'
);
