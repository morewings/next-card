'use client';

import type {FC, ReactNode} from 'react';
import {useReducer, useMemo} from 'react';

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
    const store = useMemo(() => ({state, dispatch}), [state]);
    return <Provider value={store}>{children}</Provider>;
};
