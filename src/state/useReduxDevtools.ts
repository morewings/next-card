import type {Dispatch} from 'react';
import {useCallback, useEffect, useState} from 'react';

type WindowWithDevTools = Window & {
    __REDUX_DEVTOOLS_EXTENSION__: {
        connect: () => {init: () => void};
        disconnect: () => {init: () => void};
        send: (...args: unknown[]) => {init: () => void};
    };
};

const isReduxDevtoolsExtenstionExist = (
    arg: Window | WindowWithDevTools
): arg is WindowWithDevTools => {
    return '__REDUX_DEVTOOLS_EXTENSION__' in arg;
};

export const useReduxDevtools = <TAction, TState>(
    state: TState,
    dispatch: Dispatch<TAction>
) => {
    const [lastAction, setLastAction] = useState<TAction>();
    const wrappedDispatch = useCallback(
        (action: TAction) => {
            setLastAction(action);
            return dispatch(action);
        },
        [dispatch]
    );
    useEffect(() => {
        if (isReduxDevtoolsExtenstionExist(window)) {
            window.__REDUX_DEVTOOLS_EXTENSION__.connect().init();
        }
        return () => {
            if (isReduxDevtoolsExtenstionExist(window)) {
                window.__REDUX_DEVTOOLS_EXTENSION__.disconnect();
            }
        };
    }, []);
    useEffect(() => {
        if (isReduxDevtoolsExtenstionExist(window)) {
            window.__REDUX_DEVTOOLS_EXTENSION__.send(lastAction, state);
        }
    }, [state, lastAction]);

    return wrappedDispatch;
};
