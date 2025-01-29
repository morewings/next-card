'use client';

import type {FC, ReactNode} from 'react';
import {useReducer, useMemo} from 'react';

import {useReduxDevtools} from '@/src/state';

import type {State} from './Reducer';
import {Reducer, initialState as initialStateFromReducer} from './Reducer';
import {Context} from './Context';

export type ProviderProps = {
    children: ReactNode;
    initialState?: State;
};

export const Provider: FC<ProviderProps> = ({
    children,
    initialState = initialStateFromReducer,
}) => {
    const {Provider} = Context;
    const [state, dispatch] = useReducer(Reducer, initialState);
    // set up Redux devtools (optional)
    const wrappedDispatch = useReduxDevtools(state, dispatch);
    const store = useMemo(
        () => ({state, dispatch: wrappedDispatch}),
        [state, wrappedDispatch]
    );
    return <Provider value={store}>{children}</Provider>;
};
