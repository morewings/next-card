'use client';

import type {Dispatch} from 'react';
import {createContext} from 'react';

import type {State, Action} from './Reducer';
import {initialState} from './Reducer';

type Context = {state: State; dispatch: Dispatch<Action>};

export const Context = createContext<Context>({
    state: initialState,
    dispatch: () => {},
});

Context.displayName = 'TemplateNameContext';
