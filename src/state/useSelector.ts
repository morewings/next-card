import type {Context, Dispatch} from 'react';
import {useContext} from 'react';

export const useSelector = <TState, TAction, TValue>(
    context: Context<{state: TState; dispatch: Dispatch<TAction>}>,
    callback: (arg0: TState) => TValue
) => {
    const useProvidedContext = () =>
        useContext<{state: TState; dispatch: Dispatch<TAction>}>(context);
    const {state} = useProvidedContext();
    return callback(state);
};
