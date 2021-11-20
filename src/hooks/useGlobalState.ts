import { useContext } from 'react';

import
{ GlobalStateContext } from '../state/GlobalStateProvider';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useGlobalState = (): any => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalStateContext');
  }
  return context;
};

export { useGlobalState };
