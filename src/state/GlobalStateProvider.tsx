// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Post } from '@optimisticninja/posts-api-js-client';
import React, {
  createContext, Dispatch, SetStateAction, useState,
} from 'react';

export interface GlobalStateInterface {
    posts: Post[] | [],
    nextPage: number | null,
    page: number | null,
    size: number | null,
    hasPrevious: boolean | false
}

const GlobalStateContext = createContext({
  state: {} as Partial<GlobalStateInterface>,
  setState: {} as Dispatch<SetStateAction<Partial<GlobalStateInterface>>>,
});

const GlobalStateProvider = function GlobalStateProvider({
  children,
  value = {} as GlobalStateInterface,
}: {
    children: React.ReactNode;
    // eslint-disable-next-line react/require-default-props
    value?: Partial<GlobalStateInterface>;
  }):any {
  const [state, setState] = useState(value);
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <GlobalStateContext.Provider value={{ state, setState }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export { GlobalStateProvider, GlobalStateContext };
